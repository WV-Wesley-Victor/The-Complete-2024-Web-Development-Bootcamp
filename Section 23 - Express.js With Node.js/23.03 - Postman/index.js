import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/wesley", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/wesley", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/wesley", (req, res) => {
  res.sendStatus(200);
});
