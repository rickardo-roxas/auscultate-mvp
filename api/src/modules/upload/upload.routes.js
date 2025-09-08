import { Router } from "express";
import { uploadFile } from "./upload.controller.js";

const router = Router();

/**
 * @swagger
 * /upload:
 */
router.post("/", uploadFile);

export default router;
