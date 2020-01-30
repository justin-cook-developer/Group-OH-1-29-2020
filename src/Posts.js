import React from "react";
import { useHistory } from "react-router-dom";

const Posts = ({ posts }) => {
  const history = useHistory();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} onClick={() => history.push(`/posts/${post.id}`)}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
