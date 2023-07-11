import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ITopRated {
    topRated: any[]
}
const initialState: ITopRated = {
    topRated: []
}
export const TopRatedSlice = createSlice({
    name: "topRated",
    initialState,
    reducers: {
        getTopRated(state, action: PayloadAction<any>){
            state.topRated = action.payload
        }
    }
})
export default TopRatedSlice.reducer
export const {getTopRated} = TopRatedSlice.actions