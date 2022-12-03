import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import customReducer from "./features/custom";

const store = configureStore({
    reducer: {
        custom: customReducer
    }
})

export default store;
