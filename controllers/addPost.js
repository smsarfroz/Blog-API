import prisma from '../prisma/queries.js';

const addPost = async(req, res) => {
    try {
        // console.log('req.body: ', req.body);
        const { title, content, published, authorId } = req.body;
        const booleanPublished = (published === "on");
        // console.log('published: ', published);
        // console.log('booleanPublished: ', booleanPublished);
        const intAuthorId = parseInt(authorId);
        const post = await prisma.addnewpost(title, content, booleanPublished, intAuthorId); 
        // console.log('post: ', post);
        // console.log(typeof post);
        res.json(post);
    } catch (err) {
        console.error(err);
    }
};

export default addPost;