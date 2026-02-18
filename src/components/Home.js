import React from "react";
// Named import from user.js
import { username, city } from "../data/user";

function Home() {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>City: {city}</p>
    </div>
  );
}

// Default export
export default Home;
