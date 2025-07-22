import { Router } from "express";
import getAllPosts from "../controllers/getAllPosts.js";
import getPostbyid from "../controllers/getPostbyid.js";

const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:postid", getPostbyid);

export default {
    postRouter
}