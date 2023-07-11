import { PayloadAction, createSlice } from "@reduxjs/toolkit"

 interface IPopularState {
    popular: any[]
}

const initialState: IPopularState = {
    popular: []
}


export const popularSlice = createSlice({
    name: "POPULAR",
    initialState,
    reducers: {
        getPopular(state, action: PayloadAction<any>) {
            state.popular = action.payload
        }
    }
})
export default popularSlice.reducer
export const {getPopular} = popularSlice.actions