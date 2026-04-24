import {useState} from "react";
import "../calc/Calc.css"

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const onCounterClickHandler = (e) => {
        e.target.classList.value.includes("decrease") ?
            setCounter((prevCount) => prevCount > 0 ? prevCount - 1 : prevCount) :
            setCounter((prevCount) => prevCount < 100 ? prevCount + 1 : prevCount);
    }

    return (
        <div>
            <button onClick={onCounterClickHandler} className="decrease">-</button>
            <span>{counter}</span>
            <button onClick={onCounterClickHandler} className="increase">+</button>
        </div>
    );
}