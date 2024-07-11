import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CalculatorState {
    value: string;
    result: string | null
}

export const initialState: CalculatorState = {
    value: '',
    result: null
}

export const CalculatorSlice = createSlice(
    {
        name: 'calculator',
        initialState,
        reducers: {
            addNumber: (state, action: PayloadAction<string>) => {
                state.value += action.payload
            },
            getResult: (state) => {
                try {
                    state.result = eval(state.value)
                } catch (error) {
                    console.log(error)
                    state.value = ''
                    state.result = null
                }
            },
            getClean: (state) => {
                state.value = '';
                state.result = null;
            }
        }
    }
)
export const calculatorReducer = CalculatorSlice.reducer;
export const {addNumber, getResult, getClean} = CalculatorSlice.actions;