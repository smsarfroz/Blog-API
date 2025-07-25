import { Router } from "express";
import getAllPosts from "../controllers/getAllPosts.js";
import getPostbyid from "../controllers/getPostbyid.js";
import verifyToken from "../middleware/verifyToken.js";
import postcomment from "../controllers/postcomment.js";

const postRouter = Router({ mergeParams: true });

postRouter.get("/", getAllPosts);
postRouter.get("/:postid", getPostbyid);
postRouter.post("/:postid", verifyToken, postcomment);

export default postRouter;      