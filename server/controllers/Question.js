import Questions from "../models/Questions.js";
import mongoose from "mongoose";

export const createQuestion = async (req, res, next) => {
  const question = new Questions({
    title: req.body.title,
    body: req.body.body,
    tags: req.body.tag,
    user: req.body.user,
  });
  try {
    const savedQuestion = await question.save();

    res.status(201).json(savedQuestion);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

export const getAllQuestions = async (req, res, next) => {
  const error = {
    message: "Error in retrieving questions",
    error: "Bad request",
  };

  Questions.aggregate([
    {
      $lookup: {
        from: "comments",
        let: { question_id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$question_id", "$$question_id"],
              },
            },
          },
          {
            $project: {
              _id: 1,
              comment: 1,
              createdAt: 1,
            },
          },
        ],
        as: "comments",
      },
    },
    {
      $lookup: {
        from: "answers",
        let: { question_id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$question_id", "$$question_id"],
              },
            },
          },
          {
            $project: {
              _id: 1,
            },
          },
        ],
        as: "answerDetails",
      },
    },
    {
      $project: {
        __v: 0,
      },
    },
  ])
    .exec()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(400).send(error);
    });
};

export const getQuestion = async (req, res, next) => {
  try {
    Questions.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "answers",
          let: { question_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$question_id", "$$question_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                user: 1,
                answer: 1,
                question_id: 1,
                createdAt: 1,
              },
            },
          ],
          as: "answerDetails",
        },
      },
      {
        $lookup: {
          from: "comments",
          let: { question_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$question_id", "$$question_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                question_id: 1,
                user: 1,
                comment: 1,
                createdAt: 1,
              },
            },
          ],
          as: "comments",
        },
      },
      {
        $project: {
          __v: 0,
        },
      },
    ])
      .exec()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
        res.status(400).send(err);
      });
  } catch (err) {
    res.status(400).send({
      message: "Question not found",
    });
  }
};
