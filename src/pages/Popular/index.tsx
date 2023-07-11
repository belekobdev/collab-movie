import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchingPopular } from "../../store/Reducers/creatorMovie";
import { API_KEY } from "../../API/API_KEY";

const Popular = () => {
  const dispatch = useAppDispatch();
  const { popular } = useAppSelector(s => s.popularSlice);
  useEffect(() => {
    dispatch(fetchingPopular(API_KEY, "en-US", 1));
  }, []);
  console.log(popular);
  
  return (
    <div> 
{
    popular.map(el => (
        <h1>{el.title}</h1>
    ))
}
</div>
  );
};

export default Popular;
