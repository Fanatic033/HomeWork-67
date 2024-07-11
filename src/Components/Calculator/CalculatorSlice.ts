import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CalculatorState {
    value: string;
}

export const initialState: CalculatorState = {
    value: ''
}

export const CalculatorSlice = createSlice(
    {
        name: 'calculator',
        initialState,
        reducers: {
            addNumber: (state, action: PayloadAction<string>) => {
                state.value += action.payload
            }
        }
    }
)
export const calculatorReducer = CalculatorSlice.reducer;
export const {addNumber} = CalculatorSlice.actions;