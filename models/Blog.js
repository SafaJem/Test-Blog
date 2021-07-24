const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the user schema
const BlogSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String},
  metaDescription: { type: String},
  image: { type:String },
  text: { type: String, require: true }, 
  video: { type:String },
  nameUser: { type: String },
  date: { type: Date, default: Date.now() },
});
module.exports = Blog = mongoose.model("blogs", BlogSchema);