const mongoose = require('mongoose');

// Define the Book Schema
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is mandatory
    trim: true, // Removes any unnecessary white spaces
  },
  author: {
    type: String,
    required: true, // Author is mandatory
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Auto-adds the current timestamp when a book is added
  },
});

// Export the Book Model
module.exports = mongoose.model('Book', BookSchema);
