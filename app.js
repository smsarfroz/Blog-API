import express from 'express';
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));
app.use("posts", postrouter);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
