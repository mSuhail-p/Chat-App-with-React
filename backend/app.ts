import express, { Express } from "express";

const app: Express = express();

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(5000, () => {
  console.log("project runnint on port 5000");
});
