import React, { useState } from "react";
import "./App.css";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import { useAppSelector } from "./hooks/useAppSelector";
import { settingSearch } from "./store/Reducers/searchSlice";
import { useAppDispatch } from "./hooks/useAppDispatch";
import Search from "./pages/Search";
import Home from "./pages/Home";

function App() {
 
  return (
    <div className="container">
      <div className="App">
        <Home/>
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
