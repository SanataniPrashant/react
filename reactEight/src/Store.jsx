
import { configureStore} from '@reduxjs/toolkit'
import myreducer from ""

const Store = configureStore({
    reducer: {
        myColor : myreducer
    }
})

export default Store