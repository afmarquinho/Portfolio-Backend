import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

dotenv.config();

connectDB();

const whiteList = process.env.FRONTEND_URL;
app.use(
  cors({
    origin: whiteList,
  })
);
app.use("/api", contactRoutes);

  app.listen(PORT, () =>
  console.log(`server running on ${PORT} port`)
);
