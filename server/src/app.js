import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

// TODO: express-rate-limit options
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
});

// TODO: Express JS Configuration
const app = express();
app.use(express.json());

// TODO: Necessary Packages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(cors());
app.use(helmet());
app.use(limiter);

export default app;
