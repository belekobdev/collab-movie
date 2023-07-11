import React from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Header from "./pages/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/topRated" element={<TopRated />} />
      </Routes>
    </div>
  );
}

export default App;
