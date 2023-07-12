import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchingPopular } from "../../store/Reducers/creatorMovie";
import { API_KEY } from "../../API/API_KEY";
import MovieCard from "../MovieCard";
import Slider from "react-slick";

const Popular = () => {
  const dispatch = useAppDispatch();
  const { popular } = useAppSelector((s) => s.popularSlice);
  const {language} = useAppSelector(s => s.searchSlice)
  useEffect(() => {
    dispatch(fetchingPopular(API_KEY, language, 1));
  }, [language]);
  console.log(popular);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        {popular.map((el) => (
          <MovieCard movie={el} />
        ))}
      </Slider>
    </div>
  );
};

export default Popular;
