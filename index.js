require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This server is available");
});

app.listen(port, () => {
  console.log(`This Server is running ${port}`);
});
