import asyncHandler from "express-async-handler";
import prisma from '../prisma/queries.js';

const getCommentbyid = asyncHandler(async(req, res) => {
    try {   
        const { commentid } = req.params;
        const { postid } = req.params;
        console.log(req.params);
        const id = parseInt(commentid);
        const pid = parseInt(postid);
        const comment = await prisma.getCommentbyid(id, pid);
        res.json(comment);
    } catch (error) {
        console.error(error);
    }
});

export default getCommentbyid;
