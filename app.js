const express = require("express");
const app = express();
const { connectDB } = require("./DB/DB");
const { handleError } = require("./utils/error");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

connectDB();

app.use("/api/user/", require("./views/user"));
app.use((err, req, res, next) => {
  handleError(err, res);
});

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});
