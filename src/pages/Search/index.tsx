import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchingSearch } from '../../store/Reducers/creatorMovie';
import { API_KEY } from '../../API/API_KEY';
import { useParams } from 'react-router-dom';
import MovieCard from '../MovieCard';
import Slider from 'react-slick';

const Search = () => {
    const dispatch = useAppDispatch();
    const {search} = useAppSelector(s => s.searchSlice);
    const {MovieName} = useParams();
    useEffect(() => {
        dispatch(fetchingSearch(API_KEY, MovieName))
    }, [MovieName])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow:5 ,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div>
            <Slider {...settings}>
            {
                search.map(el => (
                    <MovieCard movie={el}/>
                ))
            }
            </Slider>
        </div>
    );
};

export default Search;