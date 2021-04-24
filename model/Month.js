const mongoose = require("mongoose");

const MonthSchema = new mongoose.Schema({
  day: [
    {
      type: String,
      required: [true, "Day is required!"],
    },
  ],
  date: [
    {
      type: String,
      required: [true, "Datum is required!"],
    },
  ],
  hours: [
    {
      hour: {
        type: Number,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },

  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});

const Month = mongoose.model("Month", MonthSchema);
module.exports = Month;
