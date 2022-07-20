import React from "react";

import "./App.css";
import PostItem from "./features/PostItem";
import PostList from "./features/PostList";
import UserList from "./features/UserList";

function App() {
  return (
    <div className="App">
      <UserList />
      <PostList />
    </div>
  );
}

export default App;
