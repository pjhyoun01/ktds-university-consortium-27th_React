import {useState} from "react";
import "./Calc.css"

export const CalcMain = () => {

    const [{firstNum, secondNum, result}, setNums] = useState({
        firstNum: 10,
        secondNum: 20,
        result: 0
    });

    const onFirstnumChangeHandler = (e) => {
        setNums((prevNum) => {
            return {...prevNum, firstNum: parseInt(e.target.value)};
        });
    }

    const onSecondnumChangeHandler = (e) => {
        setNums((prevNum) => {
            return {...prevNum, secondNum: parseInt(e.target.value)};
        });
    }

    const onCalcClickHandler = (operator) => {
        let resultNum = 0;

        if (operator === "+") {
            resultNum = (firstNum + secondNum)
        } else if (operator === "-") {
            resultNum = (firstNum - secondNum)
        } else if (operator === "*") {
            resultNum = (firstNum * secondNum)
        } else if (operator === "/") {
            resultNum = (firstNum / secondNum)
        }

        setNums((prevNum) => {
            return {...prevNum, result: resultNum};
        });

    };

    return (
        <>
            <div>
                <input id="first-num" type="number" value={firstNum} onChange={onFirstnumChangeHandler}/>
                <button onClick={onCalcClickHandler.bind(this, "+")}>+</button>
                <button onClick={onCalcClickHandler.bind(this, "-")}>-</button>
                <button onClick={onCalcClickHandler.bind(this, "*")}>*</button>
                <button onClick={onCalcClickHandler.bind(this, "/")}>/</button>
                <input id="second-num" type="number" value={secondNum} onChange={onSecondnumChangeHandler}/>
                <span>=</span>
                <span>{result}</span>
            </div>
        </>
    )
}