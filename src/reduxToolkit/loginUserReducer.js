import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../environment/data'

const initialState = {
  loginUser: {},
}


export const loginSlice = createSlice({
  name: 'loginUserReducer',
  initialState,
  reducers: {

    updateLoginUser: (state, action) => {
      console.log("reducer called",action.payload)
      state.loginUser = action.payload
    },
  },
  
})

// Action creators are generated for each case reducer function
export const { updateLoginUser } = loginSlice.actions

export default loginSlice.reducer