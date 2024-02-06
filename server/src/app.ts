import express from "express";
import cors from "cors";
import { createServer } from "http";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

export const app = express();

const httpServer = createServer(app);

// global middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // configure static file to save images locally

import healthcheckRouter from "./routes/healthcheck.routes";
import paymentRouter from "./routes/payment.routes";

// * Healthcheck
app.use("/api/v1/healthcheck", healthcheckRouter);

// * App apis
app.use("/api/v1/payment", paymentRouter);

export { httpServer };
