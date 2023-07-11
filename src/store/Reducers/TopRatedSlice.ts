import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ITopRated {
    topRated: any[]
}
const initialState: ITopRated = {
    topRated: []
}
export const topRatedSlice = createSlice({
    name: "topRated",
    initialState,
    reducers: {
        getTopRated(state, action: PayloadAction<any>){
            state.topRated = action.payload
        }
    }
})
export default topRatedSlice.reducer
export const {getTopRated} = topRatedSlice.actions