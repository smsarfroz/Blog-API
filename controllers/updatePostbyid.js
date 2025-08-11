import prisma from '../prisma/queries.js';

const updatePostbyid = async(req, res) => {
    try {
        const { postid } = req.params;
        const id = parseInt(postid);
        const published = req.body.published;
    
        const updatePost = await prisma.updatePostbyid(id, published);

        res.status(200).json(updatePost);
    } catch (error) {   
        console.error(error);
    }
};

export default updatePostbyid;