import {memo, useRef, useState} from "react";
import {Alert} from "../ui/Modal.jsx";
import {useDispatch} from "react-redux";
import {fetchAddTodo, fetchTodoList} from "../../http/todo/fetchTodo.js";
import {todoAction} from "../../stores/toolkit/slices/todoSlice.js";

const TodoAppender = memo(() => {

    const reactReduxDispatcher = useDispatch();

    const [isFetching, setIsFetching] = useState(false);

    const todoRef = useRef();
    const dueDateRef = useRef();
    const priorityRef = useRef();
    // const [{todoRef, dueDateRef, priorityRef}] = useRef();

    const alertRef = useRef();

    const onSaveButtonClickHandler = async () => {
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
        reactReduxDispatcher({type: "todo-add", payload: {
                todo: todoRef.current.value,
                dueDate: dueDateRef.current.value,
                priority: priorityRef.current.value
            }});
        setIsFetching(true);
        const addTodo = await fetchAddTodo(todoRef.current.value, dueDateRef.current.value, priorityRef.current.value);
        setIsFetching(false);
        if (addTodo) {
            alert(addTodo.errors);
        }
        const refresh = await fetchTodoList();
        reactReduxDispatcher(todoAction.refresh(refresh.body));

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
                <button type="button" disabled={isFetching} onClick={onSaveButtonClickHandler}>
                    {isFetching ? "저장중..." : "저장"}
                </button>
            </footer>
        </>
    )
})
export default TodoAppender;