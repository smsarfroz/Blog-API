import { PrismaClient } from './generated/prima/index.js';
const prisma = new PrismaClient();

async function getAllPosts() {
    try {
        const posts = await prisma.Post.findMany();
        return posts;
    } catch (error) {
        console.error(error);
    }
}

async function getPostbyid(id) {
    try {
        const post = await prisma.Post.findUnique({
            where: {
                id: id
            }
        })
        return post;
    } catch (error) {
        console.error(error);
    }
}

async function getAllCommentsbyPostid(id) {
    try {
        const comments = await prisma.Comment.findMany({
            where: {
                postid: id
            }
        })
        return comments;
    } catch (error) {
        console.error(error);
    }
}

async function getCommentbyid(id) {
    try {
        const comment = await prisma.Comment.findUnique({
            where: {
                id: id
            }
        })
        return comment;
    } catch (error) {
        console.error(error);
    }
}

export default {
    getAllPosts,
    getPostbyid,
    getCommentbyidonPostid,
    getAllCommentsbyPostid
}