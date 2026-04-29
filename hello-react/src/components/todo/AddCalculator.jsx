import {useState} from "react";

export const AddCalculator = () => {
    const [addResult, setAddResult] = useState(0);
    const [startNum, setStartNum] = useState(1);
    const [endNum, setEndNum] = useState(10);

    const add = () => {
        let sum = 0;
        for (let i = startNum; i <= endNum; i++) {
            sum += i;
        }
        setAddResult(sum);
    }
    return (
        <div>
            <input type="number" value={startNum} onChange={(event) => {
                setStartNum(parseInt(event.target.value))
            }}/> ~{" "}
            <input type="number" value={endNum} onChange={(event) => {
                setEndNum(parseInt(event.target.value))
            }}/> = <span>{addResult}</span>
            <div>
                <button type="button" onClick={add}>
                    계산하기
                </button>
            </div>
        </div>
    )
}