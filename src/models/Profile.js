// Post Model File
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Post Schema
const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "credential"
  },
  email: {
    type: String,
    required: true
  }
});
