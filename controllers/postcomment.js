import jwt from 'jsonwebtoken';
import prisma from '../prisma/queries.js';

const postcomment = async(req, res) => {
    console.log('req.token ' , req.token);
    jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
        if (err) {
            console.log('req.token: ', req.token);
            console.log('authData: ', authData);
            res.sendStatus(403);
        } else {
            const { userId, postId, content } = req.body;
            console.log('userId, postId, content: ', userId, postId, content);
            // await prisma.addnewcomment(userId, postId, content);
            res.json({
                message: 'Post created...',
                authData
            });
        }
    });
};

export default postcomment;
