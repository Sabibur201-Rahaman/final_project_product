import { createSlice } from "@reduxjs/toolkit";
export const ProfileSlice=createSlice({
name:'profile',
initialState:{
ProfileValue:[]
},
reducers:{
SetProfile:(state,action)=>{
state.ProfileValue=action.payload
},

}
})
export const{SetProfile}=ProfileSlice.actions
export default ProfileSlice.reducer