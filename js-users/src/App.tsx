import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Users from "./Pages/Users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
