import React from "react";
import { IMovies } from "../types/IMovie";
import Slider from "react-slick";

interface IProps {
  movie: IMovies;
}

const MovieCard = ({ movie }: IProps) => {
  return (
    <div>
      <div>
        <img
          className="rounded-[14px]"
          width={200}
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
          alt=""
        />
        <h1 className="mt-[10px] text-[black] bold-[900]">{movie.title}</h1>
        <h5 className="text-[gray]">{movie.release_date}</h5>
      </div>
    </div>
  );
};

export default MovieCard;