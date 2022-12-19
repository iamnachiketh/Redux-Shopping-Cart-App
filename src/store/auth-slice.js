import {createSlice} from "@reduxjs/toolkit"

const authSlice= createSlice({
name:"auth",
initialState:{isLoogedIn : false},
reducers:{
    login(state) {
        state.isLoogedIn=true;
    },
    logout(state) {
        state.isLoogedIn=false;
    }
}
})

export const authAction = authSlice.actions;
export default  authSlice 