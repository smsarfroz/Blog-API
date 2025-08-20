import prisma from '../prisma/queries.js';

const updateCommentbyId = async(req, res) => {
    try {   
        const { commentid } = req.params;
        const cid = parseInt(commentid);
        const { newContent } = req.body;
        // console.log('cid, newContent: ', cid, newContent);
        const updatedComment = await prisma.updateCommentbyId(cid, newContent);
        // console.log('updatedComment: ', updatedComment);
        return updatedComment;
    } catch (error) {
        console.error(error);
    }
};

export default updateCommentbyId;