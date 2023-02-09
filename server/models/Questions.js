import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    title: { type: String },
    body: { type: String },
    tags: [],
    createdAt: { type: Date, default: Date.now() },
    user: {
      type: Object,
    },
    comment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Question", QuestionSchema);
