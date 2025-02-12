import {configureStore} from "@reduxjs/toolkit"
import mybgColor from "./ColorSlice"

const Store = configureStore(
    {
        reducer: {
            myColor : mybgColor
        }
    }
)
export default Store



