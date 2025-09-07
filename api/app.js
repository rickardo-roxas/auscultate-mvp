const express = require("express");
const app = express();

// Swagger setup
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./config/swagger.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

// Swagger docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

module.exports = app;
