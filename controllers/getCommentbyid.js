import asyncHandler from "express-async-handler";
import prisma from '../prisma/queries.js';

const getCommentbyid = asyncHandler(async(req, res) => {
    try {   
        const { commentid } = req.params;
        const id = parseInt(commentid);
        const comment = await prisma.getCommentbyid(id);
        res.json(comment);
    } catch (error) {
        console.error(error);
    }
});

export default getCommentbyid;
