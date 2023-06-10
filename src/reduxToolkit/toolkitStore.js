import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userReducer'
import loginUserReducer from './loginUserReducer'

export const toolkitStore = configureStore({
    reducer: {
        users: userReducer,
        loginUserReducer: loginUserReducer
    }
}

)