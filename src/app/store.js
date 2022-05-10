import { configureStore } from '@reduxjs/toolkit'
import composerNameReducer from '../features/composerName/composerNameSlice'

export default configureStore({
    reducer: {
        name: composerNameReducer
    }
})

