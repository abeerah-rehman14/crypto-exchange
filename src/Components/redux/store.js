import { configureStore } from '@reduxjs/toolkit';
import loginUserReducer from './reducer/loginUserReducer'


const store = configureStore({
    reducer: {
        loginUserReducer : loginUserReducer
    }
})

export default store;