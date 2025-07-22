import { Router } from "express";
import getAllCommentsbyPostid from "../controllers/getAllCommentsbyPostid";
import getCommentbyidonPostid from "../controllers/getCommentbyidonPostid";

const commentRouter = Router();

commentRouter.get("/", getAllCommentsbyPostid);
commentRouter.get("/:commentid", getCommentbyidonPostid);