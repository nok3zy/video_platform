import dotenv from "dotenv";
import "./db";
import app from "./app";
dotenv.config();

import "./models/video";
import "./models/comment";
import "./models/user";

const PORT = process.env.PORT||4000;

const handleListening = () =>
  console.log(`http://localhost:${PORT} ✔✔`);

app.listen(PORT, handleListening);
