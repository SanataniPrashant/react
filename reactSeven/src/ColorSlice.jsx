import { createSlice } from "@reduxjs/toolkit";

const ColorSlice = createSlice(
    {
        name : "mycolor",
        initialState : { color : "red" },
        reducers : {
            blueColor:(state)=> {
                state.color = "blue";
            },
            greenColor:(state)=> {
                state.color = "green";
            },
            yellowColor:(state)=> {
                state.color = "yellow";
            },
            blackColor:(state)=> {
                state.color = "black";
            }
        }
    }
)
export const {blueColor,greenColor,yellowColor,blackColor}=ColorSlice.actions;
export default ColorSlice.reducer;