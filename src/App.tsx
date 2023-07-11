import React from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks/useAppSelector";

function App() {
  const {popular} = useAppSelector(s => s.popularSlice)
  return (
    <div className="container">
      <div className="App">
        <h1>ertgfh</h1>
        <div className="welcome px-[40px] flex jutify-center py-[100px] flex-col">
          <h1 className="text-white text-[40px] font-[900]">
            Добро пожаловать.
          </h1>
          <h2 className="text-white text-[30px] font-[500] relative bottom-[10px]">
            Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
          </h2>
          <div className="flex items-center mt-[40px]">
            <input
              className="w-[1300px] px-[20px] text-[16px] outline-none h-[45px] rounded-[40px]"
              placeholder="Найти фильм, сериал, персону....."
              type="text"
            />
            <button className="btn   w-[140px] rounded-[40px] relative right-[40px] h-[45px]">
              Search
            </button>
          </div>
        R</div>
        <div>
          <div className="flex items-center mt-[30px]">
            <h1 className=" ml-[30px] text-[26px]">В тренде</h1>
            <div className="border">
              <NavLink
                className="left  text-[gray]  bg-[white] h-[40px] py-[3px] px-[17px] rounded-[30px] "
                to={"/popular"}
              >
                Popular
              </NavLink>
              <NavLink
                className="right bg-[white] text-[gray] h-[40px] py-[3px]  px-[17px] rounded-[30px]"
                to={"/topRated"}
              >
                Top Rated
              </NavLink>
            </div>
          </div>

          <div className="mt-[20px] ml-[30px]">movies</div>
        </div>
      </div>
    </div>
  );
}

export default App;
