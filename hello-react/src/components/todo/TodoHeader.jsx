import {Confirm} from "../ui/Modal.jsx";
import {useContext, useRef} from "react";
import {TodoContext} from "./context/TodoContext.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllDoneTodo, fetchTodoList} from "../../http/todo/fetchTodo.js";
import {todoAction, todoSlice} from "../../stores/toolkit/slices/todoSlice.js";

const TodoHeader = () => {
    const checkboxRef = useRef();
    const confirmRef = useRef();

    const reactReduxDispatch = useDispatch();

    // react-redux store -> todo 가져오기
    const todoList = useSelector(store => store.todo.list);
    const {all, done, process} = {
        all: todoList.length,
        done: todoList.filter((item) => item.done).length,
        process: todoList.filter((item) => !item.done).length,
    }

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


    // all cone에 대한 낙관적 업데잍느 진행
    // 사용자가 all done을 요청했을 때 요청 결과와 상관없이 우선 all done 이 된 것 처럼 보여줌
    // fetch이후에 실패했을 경우 원래 상태로 돌려줌
    //            성공했을 경우 변경된 상태 유지
    //            all done을 수행하는 중에 다른 사용자로 인해 데이터가 추가되었다면 불러올 필요

    const onConfirmOkHandler = async () => {

        reactReduxDispatch(todoAction.allDone())
        const allDoneTodo = await fetchAllDoneTodo();
        if (allDoneTodo.errors) {
            alert(allDoneTodo.errors);
        } else {
            const fetchResult = await fetchTodoList();
            reactReduxDispatch(todoAction.refresh(fetchResult.body));
        }
        await fetchTodoList()
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