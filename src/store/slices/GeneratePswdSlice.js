import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    newGeneratePswd: ''
};

export const GeneratePswdSlice = createSlice({
    name: 'generatePaswd',
    initialState,
    reducers: {
        setGeneratePswd: (state,action) => {
            state.newGeneratePswd = action.payload
        }
    }
})

export const {setGeneratePswd} = GeneratePswdSlice.actions;
export default GeneratePswdSlice.reducer