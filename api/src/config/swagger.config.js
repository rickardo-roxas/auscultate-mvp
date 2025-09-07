import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Auscultate API",
      version: "1.0.0",
      description: "Auscultate MVP API for AI-powered lung sound diagnosis",
    },
    servers: [
      {
        url: "http://localhost:5000/api", // change for prod
      },
    ],
  },
  apis: ["./src/modules/**/*.routes.js"], // path to your route files
};

const specs = swaggerJsdoc(options);

export default specs;
