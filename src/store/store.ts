import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TopRatedSlice from "./Reducers/TopRatedSlice"
 export const rootReducer = combineReducers({
    TopRatedSlice
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]







