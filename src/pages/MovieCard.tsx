import React from "react";
import { IMovies } from "../types/IMovie";

interface IProps {
  movie: IMovies;
}

const MovieCard = ({ movie }: IProps) => {
  return (
    <div>
      <img className="rounded-[14px]"
        width={200}
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
        alt=""
      />
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieCard;
