import express from 'express';
import postRouter from './routes/postRouter.js';
import commentRouter from './routes/commentRouter.js';
import signupRouter from './routes/signupRouter.js';
import loginRouter from './routes/loginRouter.js';
import logoutRouter from './routes/logoutRouter.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello, world!"));
app.use("/posts", postRouter);
app.use("/posts/:postid/comments", commentRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT;
const server = app.listen(PORT);
server.keepAliveTimeout = 30000; 
server.headersTimeout = 31000; 
app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}!`);
});
