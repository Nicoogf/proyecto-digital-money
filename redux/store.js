import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice" ;

export const store = configureStore({
    reducer :{
            userReducer
      }
 })

 export const rootState = store.getState();
 export const AppDispatch = store.dispatch;