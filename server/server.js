import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection establised successfully connected :)"));

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(PORT, () => console.log(`Server Running on PORT:${PORT}`));
