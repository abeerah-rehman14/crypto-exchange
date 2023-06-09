import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userReducer'

export const toolkitStore = configureStore({
    reducer: {
        user: userReducer
    }
}

)