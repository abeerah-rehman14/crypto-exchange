import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../environment/data'

const initialState = {
  registeredUsers: [],
  status: "idle",
  error: ""
  
}

export const fetchUserData = createAsyncThunk("user/fetchUser", async ()=>{
    try{
        const res = await api.get("/users")
        return [...res.data]
    }
    catch(err){
        return err.message

    }
})

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    // getUser: (state) => {
    
    //   state.user = { 
    //   "id": 0,
    //   "name": "Abeera Rehman",
    //   "email": "abeerah.rehman@systemsltd.com",
    //   "password": "P@ssw0rd",
    //   "address": "address",
    //   "cnic": "base64"
    // }
    // },
    // updateUser: (state, action) => {
    //   state.user = action.payload
    // },
  },
  extraReducers(builder){
    builder
    .addCase(fetchUserData.pending, (state=initialState,action)=>{
        state.status = "loading"
    })
    .addCase(fetchUserData.fulfilled,(state=initialState,action)=>{
        state.status = "success"
        state.registeredUsers = action.payload
    })
    .addCase(fetchUserData.rejected,(state=initialState,action)=>{
        state.status = "failure"
        state.error = action.error.message

    })
  }
})

// Action creators are generated for each case reducer function
export const { getUser, decrement, updateUser } = userSlice.actions

export default userSlice.reducer