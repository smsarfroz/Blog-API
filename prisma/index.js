import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

async function main() {
    const user1 = await prisma.addnewuser("tcha@gmail.com", "tanish", "abc12D@");
    const user2 = await prisma.addnewuser("mcha@gmail.com", "mahesh", "xyz34D@");
    const post1 = await prisma.addnewpost("cool title", "cool content", true, 1);
    const post2 = await prisma.addnewpost("another cool title", "another cool content", true, 2);

    const comment1 = await prisma.addnewcomment(1, 1, "comment1");
    const comment2 = await prisma.addnewcomment(1, 2, "comment2");
    const comment3 = await prisma.addnewcomment(2, 1, "comment3");
    const comment4 = await prisma.addnewcomment(2, 2, "comment4");
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })