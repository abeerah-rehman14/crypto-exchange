import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userReducer'
import loginUserReducer from './loginUserReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, loginUserReducer)


export const toolkitStore = configureStore({
    reducer: {
        //users: userReducer,
        loginUserReducer: persistedReducer,
        },
        middleware: [thunk]
        // getDefaultMiddleware =>
        // getDefaultMiddleware({
        // serializableCheck: false,
        // }),
}

)

export const persistor = persistStore(toolkitStore)