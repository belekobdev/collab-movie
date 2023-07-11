import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}






export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]







