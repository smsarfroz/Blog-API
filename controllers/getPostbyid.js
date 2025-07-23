import asyncHandler from "express-async-handler";
import prisma from '../prisma/queries.js';

const getPostbyid = asyncHandler(async(req, res) => {
    try {
        const { postid } = req.params;
        const post = await prisma.getPostbyid(postid);
        res.json(post);
    } catch {
        console.error(error);
    }
});

export default getPostbyid;
