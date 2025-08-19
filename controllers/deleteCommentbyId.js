import prisma from '../prisma/queries.js';


const deleteCommentbyId = async(req, res) => {
    try {
        const { commentid } = req.params;
        const cid = parseInt(commentid);
        const comment = await prisma.deleteCommentbyId(cid);
        return comment;
    } catch (error) {
        console.error(error);
    }
}

export default deleteCommentbyId;