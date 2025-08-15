import { Router } from "express";
import jwt from 'jsonwebtoken';

const loginRouter = Router();

loginRouter.post("/", async(req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    jwt.sign({user}, process.env.SECRET_KEY, { expiresIn: '30s' }, (err, token) => {
        res.json({token});
    });
});

export default loginRouter;