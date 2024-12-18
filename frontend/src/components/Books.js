import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the backend
    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/books');
        setBooks(res.data);
      } catch (err) {
        console.error('Error fetching books:', err);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Library Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
