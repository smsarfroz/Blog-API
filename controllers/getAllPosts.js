import asyncHandler from "express-async-handler";
import prisma from '../prisma/queries.js';

const getAllPosts = asyncHandler(async(req, res) => {
    try {
        const posts = await prisma.getAllPosts();
        res.json(posts);
    } catch {
        console.error(error);
    }
});

export default getAllPosts;