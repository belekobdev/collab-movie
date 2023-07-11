import { combineReducers, configureStore } from "@reduxjs/toolkit";
import popularSlice from "./Reducers/popularSlice";
import TopRatedSlice from "./Reducers/TopRatedSlice";
export const rootReducer = combineReducers({
    popularSlice,
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







