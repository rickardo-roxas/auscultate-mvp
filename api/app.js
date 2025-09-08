import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// swagger config her

import uploadRoutes from "./src/modules/upload/upload.routes.js";

app.get("/", (_req, res) => res.send("API is running"));
app.use("/upload", uploadRoutes);

export default app;
