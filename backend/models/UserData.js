const mongoose = require("mongoose");

const userDataSchema = mongoose.Schema(
  {
    website: String,
    login: String,
    password: String,
    remarks: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserData", userDataSchema);
