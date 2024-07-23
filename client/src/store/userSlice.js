import {createSlice} from "@reduxjs/toolkit"

const initialData = {
    username:"",
    status:"idle",
    address:"",
    position:"",
    error:"",
    role:"member",
    isLoggedIn:false
}


const userSlice = createSlice({
    name:"user",
    initialSate:initialData,
    reducers:{
        login:(state,action)=>{
            state.username = action.payload;
            state.isLoggedIn = true;
           
        },
        logout:(state,action)=>{
            state.isLoggedIn = false,
            state.username = null;
        },
        updateProfile:(state,action)=>{
            state.username = action.paylod;

        }
    }
})

export const {login,logout,updateProfile} = userSlice.actions;

export default userSlice.reducer;