import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uppercase: true,
    lowercase: true,
    symbols: true,
    numbers: true
}

export const OptionSlice = createSlice({
    name: 'option',
    initialState,
    reducers: {
        setUppercase: (state, action) => {
            state.uppercase = action.payload
        },
        setLowercase: (state, action) => {
            state.lowercase = action.payload

        },
        setSymbols: (state, action) => {
            state.symbols = action.payload

        },
        setNumbers: (state, action) => {
            state.numbers = action.payload

        },

    }
})

export const {setUppercase, setLowercase, setSymbols, setNumbers} = OptionSlice.actions;
export default OptionSlice.reducer