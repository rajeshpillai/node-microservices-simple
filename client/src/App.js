import React, {useState, useEffect} from 'react';
import PostForm from './features/PostForm';
import PostList from './features/PostList';
import './app.css';

export default () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className="container">
      <header className="app-header">
        <h1>Node - MicroServices Lab</h1>
      </header>

      <div className="post-form-container">
        <h2>NEW POST</h2>
        <PostForm />
      </div>
      <div className="container post-list-container">
        <h1>Posts</h1>
        <PostList />
      </div>
    </div>
  );
};
