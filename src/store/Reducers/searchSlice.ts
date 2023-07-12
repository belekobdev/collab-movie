import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IMovies } from "../../types/IMovie"

interface ISearchState {
    search: IMovies[],
    searching: string,
    language: string
}
const initialState: ISearchState = {
    search: [],
    searching: "",
    language: "en-US"
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
        settingLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload
        }
    }
})
export default searchSlice.reducer
export const {getSearch, settingSearch, settingLanguage} = searchSlice.actions