import express from "express";
import getRoutes from "./routes/get";

let app = express();

app.use("/get", getRoutes);

export default {
  handler: app,
  path: "/api/"
};
