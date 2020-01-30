import React from "react";

const SinglePost = ({ post = {} }) => {
  if (!post.id) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.title}</p>
    </div>
  );
};

export default SinglePost;
