import express from "express";
import { contactEmail } from "../controllers/contact.js";


const router = express.Router();
router.post("/contact", contactEmail);
export default router

