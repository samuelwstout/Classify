import { createSlice } from '@reduxjs/toolkit'

export const albumSlice = createSlice({
    name: 'album',
    initialState: { album: ''},
    reducers: {
        setAlbum: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { setAlbum } = albumSlice.actions

export const selectAlbum = (state) => state.name.album

export default albumSlice.reducer