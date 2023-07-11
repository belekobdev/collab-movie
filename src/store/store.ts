import { combineReducers, configureStore } from "@reduxjs/toolkit";
import popularSlice from "./Reducers/popularSlice";
import topRatedSlice  from "./Reducers/TopRatedSlice";

const rootReducer = combineReducers({
    popularSlice,
    topRatedSlice
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}






export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]







