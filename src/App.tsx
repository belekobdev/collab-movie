import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { useAppSelector } from "./hooks/useAppSelector";

function App() {
  const { dark } = useAppSelector((s) => s.searchSlice);
  return (
    <div className={dark ? "App bg-[#181818] h-[100vh]" : "App bg-[white] h-[100vh]"}>
      <div className="container">
        <Home />
        <div className="mt-[20px] ml-[30px]">
          <Routes>
            <Route path="/" element={<Popular />} />
            <Route path="/topRated" element={<TopRated />} />
            <Route
              path="/search/search_movie/:MovieName"
              element={<Search />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
