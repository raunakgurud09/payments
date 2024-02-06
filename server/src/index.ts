import dotenv from "dotenv";
import { httpServer } from "./app";
import connectDB from "./db/index";

dotenv.config({
  path: "./.env",
});

const server = async () => {
  try {
    await connectDB();
    httpServer.listen(process.env.PORT || 8080, () => {
      console.log("⚙️  Server is running on port: " + process.env.PORT);
    });
  } catch (err) {
    console.log("Mongo db error: ", err);
  }
};

server();
