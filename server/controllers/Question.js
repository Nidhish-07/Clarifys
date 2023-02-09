import Questions from "../models/Questions.js";

export const createQuestion = async (req, res, next) => {
  const question= new Questions({
    title: req.body.title,
    body: req.body.body,
    tags: req.body.tags,
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
