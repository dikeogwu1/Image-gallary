require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const authenticateUser = require("./middleware/authentication");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// connectDB
const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/auth");
const imageRouter = require("./routes/image");
const dragAndDropRouter = require("./routes/dragAndDrop");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  })
);
app.use(express.json("./public"));
// extra packages
app.use(helmet());
app.use(cors());
app.use(xss());

app.use(express.static());
// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/image", imageRouter);
app.use("/api/v1/drag", dragAndDropRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
