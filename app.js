import express from 'express';
import postRouter from './routes/postRouter.js';
import commentRouter from './routes/commentRouter.js';
import signupRouter from './routes/signupRouter.js';
import loginRouter from './routes/loginRouter.js';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello, world!"));
app.use("/posts", postRouter);
app.use("/posts/:postid/comments", commentRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
