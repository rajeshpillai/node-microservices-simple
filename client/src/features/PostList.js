import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default () => {
  const [posts, setPosts] = useState({});
  const [isCommentCreated, toggleIsCommentCreated] = useState(false);

  const isProxy = true;
  const query_url = isProxy ? "http://localhost:9000/query/posts" 
                            : "http://localhost:4002/posts";


  const fetchPosts = async () => {
    //const res = await axios.get('http://localhost:4002/posts');
    const res = await axios.get(query_url);


    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [isCommentCreated]);

  const onCommentCreated = (comment) => {
    toggleIsCommentCreated(ps => !ps);
  }

  const postsUI = Object.values(posts).map(post => {
    return (
      <div className="col-sm-6" key={post.id}>
        <div
          className="card"
          style={{marginBottom: '20px' }}
          key={post.id}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
            <CommentList comments={post.comments} />
            <CommentForm postId={post.id} onCommentCreated={onCommentCreated} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row">
      {postsUI}
    </div>
  );
};
