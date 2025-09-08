import { Router } from "express";
import uploadController from "./upload.controller.js";

const router = Router();

/**
 * @swagger
 * /upload:
 */
router.post("/", uploadController.uploadFile);

export default router;
