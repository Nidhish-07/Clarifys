import Answers from "../models/Answers.js";

export const createAnswer = async (req, res, next) => {
  const answer = new Answers({
    question_id: req.body.question_id,
    answer: req.body.answer,
    user: req.body.user,
  });

  try {
    const savedAnswer = await answer.save();

    res.status(201).json(savedAnswer);
  } catch (err) {
    res.status(400).json(err);
  }
};
