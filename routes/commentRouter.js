import { Router } from "express";
import getAllCommentsbyPostid from "../controllers/getAllCommentsbyPostid.js";
import getCommentbyidonPostid from "../controllers/getCommentbyid.js";
import deleteCommentbyId from "../controllers/deleteCommentbyId.js";
import updateCommentbyId from "../controllers/updateCommentbyId.js";

const commentRouter = Router({ mergeParams: true });

commentRouter.get("/", getAllCommentsbyPostid);
commentRouter.get("/:commentid", getCommentbyidonPostid);
commentRouter.delete("/:commentid", deleteCommentbyId);
commentRouter.put("/:commentid", updateCommentbyId);

export default commentRouter;
