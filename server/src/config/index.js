import dotenv from "dotenv";

dotenv.config();

export default {
  APP_PORT: process.env.APP_PORT || 5000,

  // ? MongoDB localhost connection configuration
  MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  MONGODB_PORT: process.env.MONGODB_PORT || 27017,
  MONGODB_NAME: process.env.MONGODB_NAME || "test",
};
