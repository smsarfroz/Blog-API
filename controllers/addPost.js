import prisma from '../prisma/queries.js';

const addPost = async(req, res) => {
    try {
        const { title, content, published, authorId } = req.body;
        await prisma.addnewpost(title, content, published, authorId);
    } catch (err) {
        console.error(err);
    }
};

export default addPost;