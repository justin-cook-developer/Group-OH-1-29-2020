import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import Posts from "./Posts";
import Nav from "./Nav";
import SinglePost from "./SinglePost";
import { fetchPosts, fetchUser } from "./api";

import logo from "./logo.svg";
import "./App.css";

const Home = () => {
  return <p>Home</p>;
};

function App() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((posts) => setPosts(posts));
  }, []);

  useEffect(() => {
    fetchUser().then((user) => setUser(user));
  }, []);

  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      <Route path="/" exact render={() => <p>Default page "/"</p>} />
      <Route path="/home" component={Home} />
      <Route path="/posts" exact render={() => <Posts posts={posts} />} />
      <Route
        path="/posts/:postId"
        render={(props) => {
          const postId = parseInt(props.match.params.postId);
          return <SinglePost post={posts.find((post) => post.id === postId)} />;
        }}
      />
    </div>
  );
}

export default App;
