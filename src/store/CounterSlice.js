import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    count:0,
    count2:1,
    count3:3
}

const counterSlice = createSlice({
    name:'mycounter',
    initialState,
    reducers:{
        doubleCount:(state, action)=>{
            console.log(action, "COUNTER SLICE Action")
             state.count = state.count + action.payload.value
        }
    }
})
export default counterSlice.reducer
export const {doubleCount} = counterSlice.actions