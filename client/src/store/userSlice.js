import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    username:"",
    
    address:"",
    position:"",
    error:"",
    role:"member",
    isLoggedIn:false
}


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginUser(state,action){
            state.username = action.payload;
            state.isLoggedIn = true;
           
        },
        logoutUser(state,action){
            state.isLoggedIn = false,
            state.username = null;
        },
        updateProfileUser(state,action){
            state.username = action.payload;

        }
    }
})

export const {loginUser,logoutUser,updateProfileUser} = userSlice.actions;


export default userSlice.reducer;