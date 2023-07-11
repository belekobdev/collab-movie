import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { API_KEY } from '../../API/API_KEY';
import { fetchingTopRated } from '../../store/Reducers/creatorMovie';

const TopRated = () => {
    const dispatch = useAppDispatch();
    const {topRated} = useAppSelector(s => s.TopRatedSlice)
    useEffect(() => {
        dispatch(fetchingTopRated(API_KEY, "en-US", 1))
    }, [])
    return (
        <div>
            {
                topRated.map(el => (
                    <div>
                        <h1>{el.title}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default TopRated;