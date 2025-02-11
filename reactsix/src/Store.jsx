

import { configureStore} from '@reduxjs/toolkit'
import myreducer from './COunterSlice'

const Store = configureStore({
    reducer: {
        myCount : myreducer
    }
})

export default Store