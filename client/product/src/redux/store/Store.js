import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "../state-slice/SettingSlice";
export default configureStore({
    reducer:{
       settings:settingsSlice, 
    }
})