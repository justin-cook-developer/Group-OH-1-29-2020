import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        {[
          { text: "Home", to: "/home" },
          { text: "Default Page", to: "/" },
          { text: "Posts", to: "/posts" },
        ].map((destination) => (
          <li key={destination.text}>
            <Link to={destination.to}>{destination.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
