import {configureStore}from '@reduxjs/toolkit'
import counterReducer from './counter/couonterSlice'
export const store=configureStore({
  reducer:{
    counter:counterReducer
  }
})