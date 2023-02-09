import express from "express";
import { createAnswer } from "../controllers/Answer.js";

const router = express.Router();

router.post("/", createAnswer);

export default router;
