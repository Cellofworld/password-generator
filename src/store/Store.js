import { configureStore } from '@reduxjs/toolkit';
import InputValueReducer from './slices/InputValueSlice';
import OptionReducer from './slices/OptionSlice';
import GeneratePswdReducer from './slices/GeneratePswdSlice';


export default configureStore({
  reducer: {
    passwordLength: InputValueReducer,
    option: OptionReducer,
    generatePswd: GeneratePswdReducer,
  },
})