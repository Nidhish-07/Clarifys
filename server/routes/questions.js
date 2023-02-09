import express from "express";
import { createQuestion } from "../controllers/Question.js";

const router = express.Router();

router.post("/", createQuestion);

export default router;