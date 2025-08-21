// import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaClient } from '@prisma/client';
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

async function addnewuser(username, password) {
    try {
        const user = await prisma.User.create({
            data: {
                username: username,
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
            },
            include: {
                user: true
            }
        })
        return comment;
    } catch (error) {
        console.error(error);
    }
}

async function getAllPosts() {
    try {
        const posts = await prisma.Post.findMany({
            include: {
                author: true,
            }
        });
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
            },
            include: {
                user: true
            }
        })
        return comments;
    } catch (error) {
        console.error(error);
    }
}

async function getCommentbyid(id, pid) {
    try {
        const comment = await prisma.Comment.findUnique({
            where: {
                id: id,
                postId: pid
            },
            include: {
                user: true
            }
        })
        return comment;
    } catch (error) {
        console.error(error);
    }
}

async function updatePostbyid(id, status) {
    try {  
        const newStatus = (status == true ? false: true); 
        const updatePost = await prisma.Post.update({
            where: {
                id: id
            },
            data: {
                published: newStatus
            }
        })
        return updatePost;
    } catch (error) {
        console.error(error);
    }
}

async function getUserbyId(id) {
    try {
        const user = await prisma.User.findUnique({
            where: {
                id: id
            }
        })
        return user;
    } catch (error) {
        console.error(error);
    }
}

async function deleteCommentbyId(id) {
    try {
        const comment = await prisma.Comment.delete({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error(error);
    }
}

async function updateCommentbyId(id, newContent) {
    try {
        const updateComment = await prisma.Comment.update({
            where: {
                id: id
            },
            data: {
                content: newContent
            }
        })
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
    updatePostbyid,
    getUserbyId,
    deleteCommentbyId,
    updateCommentbyId
}