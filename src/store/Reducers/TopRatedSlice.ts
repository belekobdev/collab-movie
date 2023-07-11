import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IMovies } from "../../types/IMovie"

interface ITopRated {
    topRated: IMovies[]
}
const initialState: ITopRated = {
    topRated: []
}
export const TopRatedSlice = createSlice({
    name: "topRated",
    initialState,
    reducers: {
        getTopRated(state, action: PayloadAction<IMovies[]>){
            state.topRated = action.payload
        }
    }
})
export default TopRatedSlice.reducer
export const {getTopRated} = TopRatedSlice.actions