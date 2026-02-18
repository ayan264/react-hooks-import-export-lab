import React from "react";
// Named import from user.js
import { image } from "../data/user";

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={image} alt="Profile" />
    </div>
  );
}

// Default export
export default About;
