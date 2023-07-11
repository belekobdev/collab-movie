import axios from "axios";
import { AppDispatch } from "../store";
import { getPopular } from "./popularSlice";


export const fitchingPopular = (key: string, language: string, page: number ) => async (dispatch: AppDispatch) => {
    try{
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`)
        dispatch(getPopular(res.data.result))
    }catch(err: any)  {
            dispatch(err.message)
    }
}