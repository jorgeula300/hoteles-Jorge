import { configureStore } from '@reduxjs/toolkit'
import hotelsSlice from './state/hotels.slice'
export default configureStore({
    reducer: {
        hotelsSlice
    }
})