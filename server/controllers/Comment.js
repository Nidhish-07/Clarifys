import Comments from "../models/Comments.js";

export const createComment = async (req, res, next) => {
  const comment = new Comments({
    question_id: req.params.id,
    user: req.body.user,
    comment: req.body.comment,
  });

  try {
    const savedComment = await comment.save();

    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json(err);
  }
};
