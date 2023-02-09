import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import path from "path";

const app = express();

mongoose.connect();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next()
});
app.use(cors());

// app.use("/upload", express.static(path.join(__dirname, "/../uploads")));
// app.use(express.static(path.join(__dirname, "/../client/build")));

app.get("*", (req, res) => {
  try {
    // res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
