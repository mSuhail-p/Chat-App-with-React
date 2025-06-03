import express, { Express } from "express";
// import { createServer } from "http";
import "dotenv/config";

const app: Express = express();

// const server = createServer(app);

app.get("/", (req, res) => {
  res.send("working");
});

export { app };
