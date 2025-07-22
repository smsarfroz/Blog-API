import { Router } from "express";
import getAllPosts from "../controllers/getAllPosts";
import getPostbyid from "../controllers/getPostbyid";

const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:postid", getPostbyid);