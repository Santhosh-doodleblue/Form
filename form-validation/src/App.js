import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
