import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IMovies } from "../../types/IMovie"

 interface IPopularState {
    popular: IMovies[]
}

const initialState: IPopularState = {
    popular: []
}


export const popularSlice = createSlice({
    name: "POPULAR",
    initialState,
    reducers: {
        getPopular(state, action: PayloadAction<IMovies[]>) {
            state.popular = action.payload
        }
    }
})
export default popularSlice.reducer
export const {getPopular} = popularSlice.actions