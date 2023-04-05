import cors from "cors";
import { config } from "dotenv";
import express from "express";
import ZingRoute from "./routes/zing";

config();

const app = express();
const port: number = Number(process.env.PORT) || 8080;

app.use(cors({ origin: "*", credentials: true }));

app.use("/zing", ZingRoute);

app.get("/", async (req, res) => {
  res.send("Hello from ts app");
});

const server = app.listen(port, () => {
  console.log(`Ứng dụng: http://localhost:${port}/`);
});
