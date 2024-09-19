import React, { useEffect, useState } from 'react';
import { socket } from '../Services/Socket';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    socket.on('new-comment', (comment) => {
      setComments((prevComments) => [...prevComments, comment]);
    });

    return () => socket.off('new-comment');
  }, []);

  const handleAddComment = () => {
    socket.emit('add-comment', { text: newComment });
    setNewComment('');
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}

export default CommentSection;
