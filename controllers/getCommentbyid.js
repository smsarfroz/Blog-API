import asyncHandler from "express-async-handler";
import prisma from '../prisma/queries.js';

const getCommentbyid = asyncHandler(async(req, res) => {
    try {   
        const { commentid } = req.params;
        const comment = await prisma.getCommentbyid(commentid);
        res.json(comment);
    } catch (error) {
        console.error(error);
    }
});

export default getCommentbyid;
