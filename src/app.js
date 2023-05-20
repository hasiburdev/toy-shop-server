const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const blogRouter = require("./routes/blog");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/blog", blogRouter);

app.get("/", (_req, res) => {
  res.json({ message: "We are ok" });
});

module.exports = app;
