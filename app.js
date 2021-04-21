const express = require("express");
const app = express();
const { connectDB } = require("./DB/DB");

app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

connectDB();

app.use("/api/users/", require("./routes/user"));
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).json({
    message: error.message || "Unknown Error!",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});