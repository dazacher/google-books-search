const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: { 
    type: String, 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  description: String,
  image: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: "",
    unique: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
