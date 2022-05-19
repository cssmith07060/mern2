import express from 'express';
import { getPosts } from '../controllers/posts'

const router = express.router();


//localhost/5000/posts
router.get('/', getPosts);

export default router