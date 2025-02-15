import {configureStore} from "@reduxjs/toolkit"
import myans from './colorSlice'
const Store = configureStore({
    reducer: {
        mycolor:myans
    }
})
export default Store