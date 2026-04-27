import {Confirm} from "../ui/Modal.jsx";
import {useRef} from "react";

const TaskItems = ({todo, priorities, onDoneChange}) => {
    // props todo의 이름과 todo.todo의 이름이 같아 객체 구조 분해 불가
    // todo.todo의 이름을 todoTask로 변경해 할당
    const {id, todo:todoTask, dueDate, priority, isDone} = todo;

    const doneClass = isDone ? 'done' : 'not-done';

    const checkboxRef = useRef();
    const confirmRef = useRef();

    const onDoneTrueFalseChangeHandler = (event) => {
        console.log(event.key)
        console.log(event.target.key === "enter")
        if (checkboxRef.current.checked) {
            confirmRef.current.showModal("할일을 완료 처리 하시겠습니까?")
        } else {
            confirmRef.current.showModal("할일을 미완료 처리 하시겠습니까?")
        }

    }

    const onConfirmOkHandler = () => {
        onDoneChange(id)
    }

    const onConfirmCancelHandler = () => {

    }

    return (
        <>
        <Confirm dialogRef={confirmRef} onOkClick={onConfirmOkHandler} onCloseClick={onConfirmCancelHandler}/>
        <li className="task-item">
            <input type="checkbox" id={id} onChange={onDoneTrueFalseChangeHandler} checked={isDone} ref={checkboxRef}/>
            <label className={doneClass} htmlFor={id}>{todoTask}</label>
            <span className={`due-date ${doneClass}`}>{dueDate}</span>
            <span className={`priority ${doneClass}`}>{priorities[priority]}</span>
        </li>
        </>
    )
}
export default TaskItems;

export const TodoItemForChildren = ({children}) => {

    return (
        <li className="task-item">
            {children}
        </li>
    )
}
