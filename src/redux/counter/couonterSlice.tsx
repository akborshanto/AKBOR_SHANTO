import { createSlice } from "@reduxjs/toolkit";
const initialState={count:0}
const counterSlice=createSlice({
    name:"counnter",
    initialState,
    reducers:{}
})
export default counterSlice.reducer;