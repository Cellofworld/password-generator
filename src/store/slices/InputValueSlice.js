import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 6
}

export const inputVlueSlice = createSlice({
    name: 'passwordLength',
    initialState,
    reducers: {
        setPasswordLength: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setPasswordLength} = inputVlueSlice.actions;
export default inputVlueSlice.reducer