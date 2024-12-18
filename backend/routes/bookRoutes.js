const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Book Model
const books = [];

// Get Books
router.get('/', (req, res) => {
  res.json(books);
});

// Add Book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.json(newBook);
});

module.exports = router;
