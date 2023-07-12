
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { darkMode, settingSearch } from "../store/Reducers/searchSlice";

const Home = () => {
 
     const dispatch = useAppDispatch();
  const { searching } = useAppSelector((s) => s.searchSlice);
  const { popular } = useAppSelector((s) => s.popularSlice);
  const { dark } = useAppSelector((s) => s.searchSlice);
  const nav = useNavigate();
    const state = Math.floor(Math.random() * 20)
    const dispatch = useAppDispatch();
  const { searching, language} = useAppSelector(s => s.searchSlice);
  const nav = useNavigate();
    return (
        <div>
             <div className="welcome px-[40px] flex jutify-center py-[100px] flex-col">
                <div className='mb-[20px] flex items-center'>
                   <div className='flex'>
                  {
                  language === "en-US" ? <img width={30} height={20} className='rounded-[50%]' src={us} alt="" /> : <img height={20} width={30} className='rounded-[50%]' src={ru} alt="" />
                  }   
                   <select className='px-2 py-1 ml-1 rounded-[15px] bg-black text-[#1ed5a9]' style={{outline: "none"}} onChange={(e) => dispatch(settingLanguage(e.target.value))}>
                        <option value={"en-US"}>en</option>
                        <option value={"ru-RU"}>ru</option>
                    </select>
                   </div>
                    <div className='bg-white flex items-center justify-left ml-[30px] w-[80px] h-[28px] rounded-[20px]'>
                        <div className='bg-[black] w-[24px] ml-[5px] rounded-[50%] h-[18px]'></div>
                    </div>
                </div>
          <h1 className="text-white text-[40px] font-[900]">
            Добро пожаловать.
          </h1>
          <h2 className="text-white text-[30px] font-[500] relative bottom-[10px]">
            Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
          </h2>
          <div className="flex items-center mt-[40px]">
            <input onKeyDown={(e) => {

              if (e.key === "Enter") {
                nav(`/search/search_movie/${searching}`);
              }
            }}
            onChange={(e) => dispatch(settingSearch(e.target.value))}
            className="w-[1300px] px-[20px] text-[16px] outline-none h-[45px] rounded-[40px]"
            placeholder="Найти фильм, сериал, персону....."
            type="text"
          />
          <button
            onClick={() => nav(`/search/search_movie/${searching}`)}
            className="btn   w-[140px] rounded-[40px] relative right-[40px] h-[45px]"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <div className="flex items-center mt-[30px]">
          <h1  style={{
            color: dark ? "white" : "black"
          }} className=" ml-[30px] text-[26px]">В тренде</h1>
          <div style={{
            border: dark ? "1px solid white" : ""
          }} className="border">
            <NavLink
              className="left  text-[gray]  bg-[white] h-[40px] py-[3px] px-[17px] rounded-[30px] "
              to={"/"}
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
      </div>
    </div>
  );
};

export default Home;
