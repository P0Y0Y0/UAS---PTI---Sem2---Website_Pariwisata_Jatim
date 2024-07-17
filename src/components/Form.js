// src/components/Form.js
import React, { useState, useEffect } from 'react';

function CommentForm() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(savedComments);
  }, []);

  const handleNameChange = (e) => setName(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      const newComment = { name, comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setName('');
      setComment('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mt-3 wow fadeInUp">
        <div className="card-header">
          <h3 className="card-title">Komentar</h3>
        </div>
        <div className="card-body">
          {comments.map((c, index) => (
            <div key={index} className="mb-2">
              <strong>{c.name}:</strong> {c.comment}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3 wow fadeInUp">
          <label htmlFor="name" className="form-label">Nama:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3 wow fadeInUp">
          <label htmlFor="comment" className="form-label">Komentar:</label>
          <textarea
            id="comment"
            className="form-control"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary wow fadeInUp">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
