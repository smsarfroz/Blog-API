import { Router } from "express";
import getAllPosts from "../controllers/getAllPosts.js";
import getPostbyid from "../controllers/getPostbyid.js";
import verifyToken from "../middleware/verifyToken.js";
import postcomment from "../controllers/postcomment.js";
import addPost from "../controllers/addPost.js";
import updatePostbyid from "../controllers/updatePostbyid.js";

const postRouter = Router({ mergeParams: true });

postRouter.get("/", getAllPosts);
postRouter.post("/", addPost);
postRouter.get("/:postid", getPostbyid);
postRouter.post("/:postid", updatePostbyid);
postRouter.post("/:postid", verifyToken, postcomment);

export default postRouter;      