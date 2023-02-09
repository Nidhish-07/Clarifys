import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema(
  {
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Questions",
    },
    answer: {
      type: String,
    },
    createdAt: { type: Date, default: Date.now() },
    user: { type: Object },
    comment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Answer", AnswerSchema);
