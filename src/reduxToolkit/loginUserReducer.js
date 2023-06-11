import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../environment/data'

const initialState = {
  loginUser: {},
  isLoginUser: false
}


export const loginSlice = createSlice({
  name: 'loginUserReducer',
  initialState,
  reducers: {

    updateLoginUser: (state, action) => {
      console.log("reducer called",action.payload)
      state.loginUser = action.payload
      state.isLoginUser = true
    },
    logoutUser: (state,action)=>{
      state.loginUser = {}
      state.isLoginUser = false
    }

  },
  
})

// Action creators are generated for each case reducer function
export const { updateLoginUser, logoutUser } = loginSlice.actions

export default loginSlice.reducer