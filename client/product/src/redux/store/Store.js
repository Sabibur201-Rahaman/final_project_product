import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "../state-slice/SettingSlice";
import productReducer from '../state-slice/ProductSlice/'
import summaryReducer from '../state-slice/SummarySlice'
import BrandSummReducer from "../state-slice/BrandSummSlice";
export default configureStore({
    reducer:{
       settings:settingsSlice, 
       product:productReducer,
       summary:summaryReducer,
       BrandSumm:BrandSummReducer,
    }
})