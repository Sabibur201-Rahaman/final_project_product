import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "../state-slice/SettingSlice";
import productReducer from '../state-slice/ProductSlice/'
export default configureStore({
    reducer:{
       settings:settingsSlice, 
       product:productReducer,
    }
})