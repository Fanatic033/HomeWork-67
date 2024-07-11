import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store.ts";
import {addNumber} from "./CalculatorSlice.ts";
import './Calculator.css'

const Calculator = () => {
    const dispatch: AppDispatch = useDispatch();
    const calculatorValue = useSelector((state: RootState) => state.calculator.value)

    return (
        <>
            <div>{calculatorValue}</div>
            <button onClick={() => dispatch((addNumber('1')))}>1</button>
            <button onClick={() => dispatch(addNumber('2'))}>2</button>
            <button onClick={() => dispatch(addNumber('3'))}>3</button>
            <button onClick={() => dispatch(addNumber('4'))}>4</button>
            <button onClick={() => dispatch(addNumber('5'))}>5</button>
            <button onClick={() => dispatch(addNumber('6'))}>6</button>
            <button onClick={() => dispatch(addNumber('7'))}>7</button>
            <button onClick={() => dispatch(addNumber('8'))}>8</button>
            <button onClick={() => dispatch(addNumber('9'))}>9</button>
            <button onClick={() => dispatch(addNumber('0'))}>0</button>
            <button onClick={() => dispatch(addNumber('+'))}>+</button>
            <button onClick={() => dispatch(addNumber('-'))}>-</button>
            <button onClick={() => dispatch(addNumber('*'))}>*</button>
            <button onClick={() => dispatch(addNumber('/'))}>/</button>
            <button onClick={() => dispatch(addNumber('='))}>=</button>
            <button onClick={() => dispatch(addNumber('С'))}>С</button>
        </>
    );
};

export default Calculator