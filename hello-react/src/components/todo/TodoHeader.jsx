import {Confirm} from "../ui/Modal.jsx";
import {useContext, useRef} from "react";
import {TodoContext} from "./context/TodoContext.jsx";

const TodoHeader = ({todoCount:{all, done, process}, onAllDoneChange}) => {
    const checkboxRef = useRef();
    const confirmRef = useRef();

    const {componentName} = useContext(TodoContext);
    if (!componentName || componentName !== "TodoGrid") {
        return <></>;
    }

    const onAllDoneTrueFalseChangeHandler = () => {
        if (checkboxRef.current.checked) {
            confirmRef.current.showModal("모든 할일을 완료 처리 하시겠습니까?")
        } else {
            confirmRef.current.showModal("모든 할일을 미완료 처리 하시겠습니까?")
        }

    }

    const onConfirmOkHandler = () => {
        onAllDoneChange(checkboxRef.current.checked);
    }

    const onConfirmCancelHandler = () => {
        checkboxRef.current.checked = !checkboxRef.current.checked;
    }
    return (
        <>
        <Confirm dialogRef={confirmRef} onOkClick={onConfirmOkHandler} onCloseClick={onConfirmCancelHandler}/>
        <li>
            <div>전체: {all} </div>
            <div>완료: {done} </div>
            <div>미완료: {process}</div>
        </li>
        <li className="tasks-header">
            <input type="checkbox" id="checkall" onChange={onAllDoneTrueFalseChangeHandler} ref={checkboxRef}/>
            <label>Task</label>
            <span className="due-date">Due date</span>
            <span className="priority">priority</span>
        </li>
        </>
    )
}
export default TodoHeader