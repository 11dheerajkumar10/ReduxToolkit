import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    count2:0,
}

const dheerajSlice = createSlice({
    name:'dheerajcounter',
    initialState,
    reducers:{
        addCount:(state, action)=>{
            console.log(action, "DHEERAJ SLICE Action")
             state.count2 = state.count2 + action.payload.value
        }
    }
})
export default dheerajSlice.reducer
export const {addCount} = dheerajSlice.actions