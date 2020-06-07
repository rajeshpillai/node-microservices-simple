import React, { useState } from 'react';
import axios from 'axios';

export default ({ postId, onCommentCreated }) => {
  const [content, setContent] = useState('');

  const isProxy = true;
  const comments_url = isProxy ? "http://localhost:9000/comments" 
                                : "http://localhost:4001/posts";


  const onSubmit = async event => {
    event.preventDefault();

    const serverComment  = await axios.post(`${comments_url}/${postId}/posts`, {
      content
    });

    onCommentCreated(serverComment);
    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={e => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
