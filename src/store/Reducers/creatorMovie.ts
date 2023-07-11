import axios from "axios";
import { AppDispatch } from "../store";
import { getPopular } from "./popularSlice";
import { getTopRated } from "./TopRatedSlice";


export const fetchingPopular = (key: string, language: string, page: number ) => async (dispatch: AppDispatch) => {
    try{
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`)
        dispatch(getPopular(res.data.results))
    
    }catch(err: any)  {
            dispatch(err.message)
    }
}
export const fetchingTopRated = (key: string, language: string, page: number ) => async (dispatch: AppDispatch) => {
    try{
        const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${page}`)
        dispatch(getTopRated(res.data.results))
    }catch(err: any)  {
            dispatch(err.message)
    }
}