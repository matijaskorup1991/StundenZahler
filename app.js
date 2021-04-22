const express = require("express");
const morgan = require("morgan");
const app = express();
const { connectDB } = require("./DB/DB");
const ErrorHandler = require("./utils/error");

app.use(express.json());
app.use(morgan("dev"));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

connectDB();

app.use("/api/users/", require("./routes/user"));
app.use((req, res, next) => {
  return next(new ErrorHandler("Page not found!", 404));
});

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
