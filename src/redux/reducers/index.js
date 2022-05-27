import ThemeReducer from "./ThemeReducer"
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
const reducer = combineReducers({
    ThemeReducer
})
const store = configureStore({
  reducer,
})
export default store;