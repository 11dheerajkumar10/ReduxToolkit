import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import DheerajSlice from "./DheerajSlice";


const reduxStore = configureStore({
    reducer:{
        vinita: CounterSlice,
        dheeraj: DheerajSlice
    }
})

export default reduxStore

