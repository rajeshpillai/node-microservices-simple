import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  const [title, setTitle] = useState('');
  const isProxy = true;
  const post_url = isProxy ? "http://localhost:9000/posts" 
                            : "http://localhost:4000/posts";

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post(post_url, {
      title
    });

    setTitle('');
  };

  return (
    <div className="post-form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
