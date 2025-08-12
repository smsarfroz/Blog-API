import { Router } from "express";
import bcrypt from "bcryptjs";
import prisma from '../prisma/queries.js';

const signupRouter = Router();

signupRouter.post("/", async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await prisma.addnewuser(req.body.username, hashedPassword);
        // console.log(req.body.username, hashedPassword);
        res.json(user);
        // res.redirect("../login");
    } catch (error) {
        console.error(error);
    }
});

export default signupRouter;