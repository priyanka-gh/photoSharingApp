import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
