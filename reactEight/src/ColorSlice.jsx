



import { createSlice } from "@reduxjs/toolkit";

const ColorSlice =  createSlice(
    {
        name: 'myCount',
        initialState: {
            color:red
        },
        reducers: {
           colorChang:(state,actions)=>{
            state.color=actions.payload.color;
           }
        }
    }
)
export const {colorChange} =ColorSlice.actions;
export default ColorSlice.reducer;