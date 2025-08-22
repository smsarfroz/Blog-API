import jwt from 'jsonwebtoken';
import prisma from '../prisma/queries.js';

const postcomment = async(req, res) => {
    // console.log('req.token ' , req.token);
    let uid, pid, ct;
    jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
        if (err) {
            console.error(err);
            // console.log('req.token: ', req.token);
            // console.log('authData: ', authData);
            res.sendStatus(403);
        } else {
            const { userId, postId, content } = req.body;
            // console.log('userId, postId, content: ', userId, postId, content);
            // await prisma.addnewcomment(userId, postId, content);
            uid = parseInt(userId);
            pid = parseInt(postId);
            ct = content;
            // res.json(content);
            const comment = await prisma.addnewcomment(uid, pid, ct);
            // console.log('comment: ', comment);
            res.json(comment);
        }
    });
    
};

export default postcomment;
