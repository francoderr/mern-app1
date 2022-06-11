import express from "express";

import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// the '/' page is reached on '/posts'
router.get('/', getPosts);
router.post('/', createPost);

export default router;