import { Router } from "express";
import jwt from 'jsonwebtoken';

const loginRouter = Router();

loginRouter.post("/", async(req, res) => {
    const user = {
        username: req.body.username,
    }
    jwt.sign({user}, { expiresIn: '10s' }, process.env.SECRET_KEY, (err, token) => {
        res.json({token});
    });
});

export default loginRouter;