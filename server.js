const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
app.use(helmet()); // secures from xss attacks

app.use(cors);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
});
app.use(limiter);

// Database Connection
mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING)
  .then((conn) => {
    console.log("DataBase connection successfull");
  })
  .catch((err) => {
    console.log("Database connection error : ", err);
  });

// server
const server = app.listen(port || 3000, () =>
  console.log(`Server started on port ${port}!`)
);

// Handling server exit / close
process.on("SIGINT", async () => {
  console.log("shutting down the server...");

  server.close(async () => {
    console.log("Server closed");

    try {
      await mongoose.connection.close();
      console.log("Database connection closed");
      process.exit(0);
    } catch (err) {
      console.log("Error while closing the Database");
      process.exit(1);
    }
  });
});

// error handler middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.message || "Something went wrong");
});
