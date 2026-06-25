require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 3000;

const users = [
  { id: 1, name: "sabana", email: "sbana@gmail.com" },
  { id: 2, name: "sabnur", email: "sbanur@gmail.com" },
  { id: 3, name: "bobita", email: "bobita@gmail.com" },
  { id: 4, name: "sabila", email: "sabila@gmail.com" },
  { id: 5, name: "sabnom", email: "sabnom@gmail.com" },
  { id: 6, name: "notun", email: "notun@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("this server is available");
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  res.send("user create success");
});

app.listen(port, () => {
  console.log(`This Server is running ${port}`);
});
