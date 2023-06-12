import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CardSlice"
import DataFetchReducer from "./DataFetchSlice";



export const store = configureStore({
    reducer:{
        posts: CardReducer,
        data: DataFetchReducer,
     
    }
})