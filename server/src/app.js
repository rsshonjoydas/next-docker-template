import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import session from "express-session";
import helmet from "helmet";
import { createClient } from "redis";
import config from "./config";

let RedisStore = require("connect-redis")(session);

let redisClient = createClient({
  host: config.REDIS_HOST,
  port: config.REDIS_PORT,
});

// TODO: express-rate-limit options
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
});

// TODO: Express JS Configuration
const app = express();
app.use(express.json());

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: config.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    is_logged_in: false,
    cookie: {
      secure: true,
      maxAge: 50000,
    },
  })
);

// TODO: Necessary Packages
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(compression())
  .use(cors())
  .use(helmet())
  .use(limiter);

export default app;
