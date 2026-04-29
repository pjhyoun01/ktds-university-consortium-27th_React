import {Confirm} from "../ui/Modal.jsx";
import {useContext, useRef} from "react";
import {TodoContext} from "./context/TodoContext.jsx";

const TodoItems = ({todo, onDoneChange}) => {
    const priorities = ["없음", "높음", "보통", "낮음"];

    const {componentName} = useContext(TodoContext);

    // props todo의 이름과 todo.todo의 이름이 같아 객체 구조 분해 불가
    // todo.todo의 이름을 todoTask로 변경해 할당
    const {id, task, dueDate, priority, done} = todo;

    const doneClass = done ? 'done' : 'not-done';

    const checkboxRef = useRef();
    const confirmRef = useRef();


    // use hook들을 return 이전에 작성되어야함
    if (!componentName || componentName !== "TodoList") {
        return <></>
    }

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
            <input type="checkbox" id={id} onChange={onDoneTrueFalseChangeHandler} checked={done} ref={checkboxRef}/>
            <label className={doneClass} htmlFor={id}>{task}</label>
            <span className={`due-date ${doneClass}`}>{dueDate}</span>
            <span className={`priority ${doneClass}`}>{priorities[priority]}</span>
        </li>
        </>
    )
}
export default TodoItems;

export const TodoItemForChildren = ({children}) => {

    return (
        <li className="task-item">
            {children}
        </li>
    )
}
