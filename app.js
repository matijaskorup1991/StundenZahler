const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});
