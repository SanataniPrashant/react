import { configureStore } from '@reduxjs/toolkit';
import mytodo from './todoSlice';

const Store = configureStore({
  reducer: {
    myans: mytodo
  }
});

export default Store;