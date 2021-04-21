const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(express.json());

app.listen();

console.log("Value for: ", process.env.FOO);
