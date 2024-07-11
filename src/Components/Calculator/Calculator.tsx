import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store.ts";
import {addNumber, getClean, getResult} from "./CalculatorSlice.ts";
import './Calculator.css'

const Calculator = () => {
    const dispatch: AppDispatch = useDispatch();
    const {value, result} = useSelector((state: RootState) => state.calculator)

    return (
        <>
            <form action="" name="calc" className="calculator">
                <div className={'value'}>{value}</div>
                {result !== null && <div className={'value'}>Result:{result}</div>}
                <span className="num clear" onClick={() => dispatch(getClean())}><i>C</i></span>
                <span className="num" onClick={() => dispatch(addNumber('/'))}><i>/</i></span>
                <span className="num" onClick={() => dispatch(addNumber('*'))}><i>*</i></span>
                <span className="num" onClick={() => dispatch(addNumber('7'))}><i>7</i></span>
                <span className="num" onClick={() => dispatch(addNumber('8'))}><i>8</i></span>
                <span className="num" onClick={() => dispatch(addNumber('9'))}><i>9</i></span>
                <span className="num" onClick={() => dispatch(addNumber('-'))}><i>-</i></span>
                <span className="num" onClick={() => dispatch(addNumber('4'))}><i>4</i></span>
                <span className="num" onClick={() => dispatch(addNumber('5'))}><i>5</i></span>
                <span className="num" onClick={() => dispatch(addNumber('6'))}><i>6</i></span>
                <span className="num plus" onClick={() => dispatch(addNumber('+'))}><i>+</i></span>
                <span className="num" onClick={() => dispatch(addNumber('1'))}><i>1</i></span>
                <span className="num" onClick={() => dispatch(addNumber('2'))}><i>2</i></span>
                <span className="num" onClick={() => dispatch(addNumber('3'))}><i>3</i></span>
                <span className="num" onClick={() => dispatch(addNumber('0'))}><i>0</i></span>
                <span
                    className="num equal"
                    onClick={() => dispatch(getResult())}>
                    <i>=</i>
                </span>
            </form>
        </>
    );
};

export default Calculator