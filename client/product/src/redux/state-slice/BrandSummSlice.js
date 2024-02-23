import { createSlice } from "@reduxjs/toolkit";
export const BrandsummarySlice=createSlice({
name:'BrandSummary',
initialState:{
BrandValue:[]
},
reducers:{
SetBrandSummary:(state,action)=>{
state.BrandValue=action.payload
},

}
})
export const{SetBrandSummary}=BrandsummarySlice.actions
export default BrandsummarySlice.reducer