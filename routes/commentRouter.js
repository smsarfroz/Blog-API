import { Router } from "express";
import getAllCommentsbyPostid from "../controllers/getAllCommentsbyPostid.js";
import getCommentbyidonPostid from "../controllers/getCommentbyidonPostid.js";

const commentRouter = Router();

commentRouter.get("/", getAllCommentsbyPostid);
commentRouter.get("/:commentid", getCommentbyidonPostid);

export default {
    commentRouter
}