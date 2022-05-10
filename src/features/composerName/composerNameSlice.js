import { createSlice } from '@reduxjs/toolkit'

export const composerNameSlice = createSlice({
    name: 'composerName',
    initialState: { name: '' },
    reducers: {
        setComposerName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { setComposerName } = composerNameSlice.actions

export default composerNameSlice.reducer

