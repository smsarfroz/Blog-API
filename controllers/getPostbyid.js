import asyncHandler from "express-async-handler";
import prisma from '../prisma/queries.js';

const getPostbyid = asyncHandler(async(req, res) => {
    try {
        const { postid } = req.params;
        const id = parseInt(postid);
        const post = await prisma.getPostbyid(id);
        res.json(post);
    } catch {
        console.error(error);
    }
});

export default getPostbyid;
