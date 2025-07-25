import asyncHandler from "express-async-handler";
import prisma from '../prisma/queries.js';

const getAllCommentsbyPostid = asyncHandler(async(req, res) => {
    try {
        const { postid } = req.params;
        console.log(req.params);
        const id = parseInt(postid);
        const comments = await prisma.getAllCommentsbyPostid(id);
        res.json(comments);
    } catch (error) {
        console.error(error);
    }
});


export default getAllCommentsbyPostid;
