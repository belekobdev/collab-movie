import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IMovies } from "../../types/IMovie"

interface ISearchState {
    search: IMovies[],
    searching: string,
    dark: boolean
}
const initialState: ISearchState = {
    search: [],
    searching: "",
    dark: false
}
export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        getSearch(state, action: PayloadAction<IMovies[]>){
            state.search = action.payload
        },
        settingSearch(state, action: PayloadAction<string>){
            state.searching = action.payload
        },
        darkMode(state, action: PayloadAction<boolean>) {
            state.dark = action.payload
        }
    }
})
export default searchSlice.reducer
export const {getSearch, settingSearch, darkMode} = searchSlice.actions