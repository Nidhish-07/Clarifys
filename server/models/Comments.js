import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    question_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Questions",
    },
    comment: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: Object,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
