import {memo, useRef} from "react";
import {Alert} from "../ui/Modal.jsx";

const TodoAppender = memo(({onSaveClick}) => {

    const todoRef = useRef();
    const dueDateRef = useRef();
    const priorityRef = useRef();
    // const [{todoRef, dueDateRef, priorityRef}] = useRef();

    const alertRef = useRef();

    const onSaveButtonClickHandler = () => {
        if (!todoRef.current.value) {
            alertRef.current.showModal("TODO를");
            return;
        }
        else if (!dueDateRef.current.value) {
            alertRef.current.showModal("날짜를");
            return;
        }
        else if (priorityRef.current.value === "default") {
            alertRef.current.showModal("우선순위를");
            return;
        }

        onSaveClick(todoRef.current.value, dueDateRef.current.value, priorityRef.current.value);
        todoRef.current.value = "";
        dueDateRef.current.value = "";
        priorityRef.current.value = "default";
    }

    return (
        <>
            <Alert dialogRef={alertRef}/>

            <footer>
                <input type="text" placeholder="Task" ref={todoRef}/>
                <input type="date" ref={dueDateRef}/>
                <select ref={priorityRef}>
                    <option value="default">우선순위</option>
                    <option value="1">높음</option>
                    <option value="2">보통</option>
                    <option value="3">낮음</option>
                </select>
                <button type="button" onClick={onSaveButtonClickHandler}>
                    Save
                </button>
            </footer>
        </>
    )
})
export default TodoAppender;