import { createSlice } from "@reduxjs/toolkit";
export const productSlice=createSlice({
name:'product',
initialState:{
new:[],
brand:[],
category:[]
},
reducers:{
SetNewProduct:(state,action)=>{
state.new=action.payload
},
SetBrandProduct:(state,action)=>{
    state.brand=action.payload
    },
    SetCategoryProduct:(state,action)=>{
        state.category=action.payload
        }
}
})
export const{SetNewProduct,SetBrandProduct,SetCategoryProduct}=productSlice.actions
export default productSlice.reducer