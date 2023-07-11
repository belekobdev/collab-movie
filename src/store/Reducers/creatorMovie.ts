import axios from "axios";
import { AppDispatch } from "../store";
import { getPopular } from "./popularSlice";
import { getTopRated } from "./TopRatedSlice";
import { getSearch } from "./searchSlice";


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
export const fetchingSearch = (key: string, MovieName: any) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${MovieName}`)
        dispatch(getSearch(res.data.results))
    } catch (err: any) {
        dispatch(err.message)
    }
}