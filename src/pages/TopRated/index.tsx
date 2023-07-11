import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { API_KEY } from '../../API/API_KEY';
import { fetchingTopRated } from '../../store/Reducers/creatorMovie';
import MovieCard from '../MovieCard';
import Slider from 'react-slick';

const TopRated = () => {
    const dispatch = useAppDispatch();
    const {topRated} = useAppSelector(s => s.TopRatedSlice);
    useEffect(() => {
        dispatch(fetchingTopRated(API_KEY, "en-US", 1));
    }, [])
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
                topRated.map(el => (
                    <div>
                        <MovieCard movie={el}/>
                    </div>
                ))
            }
        </Slider>
        </div>
    );
};

export default TopRated;