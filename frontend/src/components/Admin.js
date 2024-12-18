import React, { useState } from 'react';
import axios from 'axios';

function Admin() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = async () => {
    try {
      await axios.post('http://localhost:5000/api/books', { title, author });
      alert('Book added successfully');
      setTitle('');
      setAuthor('');
    } catch (err) {
      console.error('Error adding book:', err);
    }
  };

  return (
    <div>
      <h2>Admin - Add New Book</h2>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
}

export default Admin;
