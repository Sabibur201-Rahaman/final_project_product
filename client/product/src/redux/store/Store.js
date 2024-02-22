import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "../state-slice/SettingSlice";
import productReducer from '../state-slice/ProductSlice/'
import summaryReducer from '../state-slice/SummarySlice'
export default configureStore({
    reducer:{
       settings:settingsSlice, 
       product:productReducer,
       summary:summaryReducer,
    }
})