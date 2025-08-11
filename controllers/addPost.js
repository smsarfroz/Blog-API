import prisma from '../prisma/queries.js';

const addPost = async(req, res) => {
    try {
        console.log(req.body);
        const { title, content, published, authorId } = req.body;
        const booleanPublished = (published === "true");
        const intAuthorId = parseInt(authorId);
        res.json(await prisma.addnewpost(title, content, booleanPublished, intAuthorId));
    } catch (err) {
        console.error(err);
    }
};

export default addPost;