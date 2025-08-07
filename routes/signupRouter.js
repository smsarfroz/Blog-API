import { Router } from "express";
import bcrypt from "bcryptjs";
import prisma from '../prisma/queries.js';

const signupRouter = Router();

signupRouter.post("/", async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await prisma.addnewuser(req.body.username, hashedPassword);
        console.log(req.body.username, hashedPassword);
    } catch (error) {
        console.error(error);
    }
});

export default signupRouter;