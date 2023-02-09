import express from "express";
import { createComment } from "../controllers/Comment.js";

const router=express.Router();

router.post('/:id',createComment )

export default router