import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

async function addnewpost(title, content, published, authorId) {
    try {
        const post = await prisma.Post.create({
            data: {
                title: title, 
                content: content, 
                published: published,
                authorId: authorId
            }
        })
        return post;
    } catch (error) {
        console.error(error);
    }
}

async function addnewuser(email, name, password) {
    try {
        const user = await prisma.User.create({
            data: {
                email: email,
                name: name,
                password: password
            }
        })
        return user;
    } catch (error) {
        console.error(error);
    }
}

async function addnewcomment(userId, postId, content) {
    try {
        const comment = await prisma.Comment.create({
            data: {
                userId: userId,
                postId: postId, 
                content: content
            }
        })
        return comment;
    } catch (error) {
        console.error(error);
    }
}

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
                postId: id
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
    getCommentbyid,
    getAllCommentsbyPostid,
    addnewuser,
    addnewcomment,
    addnewpost, 
}