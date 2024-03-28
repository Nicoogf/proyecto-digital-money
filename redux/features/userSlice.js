const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    online: true
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        cambiarSesion: (state => {
            state.online = !state.online
        })
    }
})

export const { cambiarSesion } = userSlice.actions

export default userSlice.reducer;