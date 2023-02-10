import express from "express";
import {
  createQuestion,
  getAllQuestions,
  getQuestion,
} from "../controllers/Question.js";

const router = express.Router();

router.post("/", createQuestion);
router.get("/:id", getQuestion);
router.get("/", getAllQuestions);

export default router;
