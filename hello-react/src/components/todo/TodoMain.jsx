// ecma function (fat arrow function)
// const: 상수를 정의하는 키워드
// const a = (parameter) => {function body}

// function과 fat arrow function의 기능적 차이
// function => 함수를 호출한 대상을 this객체로 알 수 없음
// fat arrow function => this 키워드 사용 불가
//                          함수를 호출한 대상을 event 파라미터로만 알 수 있음

// export default 이후에 const 키워드를 사용할 수 없음
import TodoHeader from "./TodoHeader.jsx";
import TodoItems from "./TodoItems.jsx";
import TodoAppender from "./TodoAppender.jsx";
import TodoList from "./TodoList.jsx";
import {useCallback, useEffect, useMemo, useState} from "react";
import {TodoGrid} from "./TodoGrid.jsx";
import {fetchAddTodo, fetchAllDoneTodo, fetchDoneTodo, fetchTodoList} from "../../http/todo/fetchTodo.js";

const TodoMain = () => {

    // fetch("http://localhost:8888/api/v1/task", {
    //     method: "GET",
    // })
    //     .then(response => response.json())
    //     .then(json => console.log("json 데이터: ", json));
    // console.log("TodoMain");


    // const ==> 상수 정의
    // let ==> 변수 정의 (반복문 외 잘 사용하지 않음)
    // TODO JSON DATA
    const [data, setData] = useState([]);

    const fetchTodoListData = async () => {

        const TodoList = await fetchTodoList();
        if (!TodoList) {
            alert(TodoList.errors)
        } else {
            setData(TodoList.body)
        }
    };
    useEffect(() => {
        fetchTodoListData();
    }, []);

    const todoCount = useMemo(() => {
        return {
            all: data.length,
            done: data.filter((item) => item.done).length,
            process: data.filter((item) => !item.done).length,
        }
    }, [data])

    const onAllDoneChangeHandler = useCallback(async () => {
        const allDoneTodo = await fetchAllDoneTodo();
        if (allDoneTodo) {
            alert(allDoneTodo.errors);
        }
        await fetchTodoListData()
    }, []);

    const onDoneChangeHandler = useCallback(async (id) => {
        const doneTodo = await fetchDoneTodo(id);
        if (doneTodo) {
            alert(doneTodo.errors);
        }
        await fetchTodoListData()
    }, []);

    const onSaveClickHandler = async (todo, dueDate, priority) => {

        const addTodo = await fetchAddTodo(todo, dueDate, priority);
        if (addTodo) {
            alert(addTodo.errors);
        }
        await fetchTodoListData()
    };

    // 컴포넌트가 만들어줄 HTML Tag set 을 반환
    return (
        <div className="wrapper">
            <header>React Todo</header>
            <TodoGrid>
                <TodoHeader todoCount={todoCount} onAllDoneChange={onAllDoneChangeHandler}/>
                <TodoList>
                    {data.map((todo) => (
                        <TodoItems key={todo.id} todo={todo} onDoneChange={onDoneChangeHandler}/>
                    ))}
                </TodoList>
            </TodoGrid>
            <TodoAppender onSaveClick={onSaveClickHandler}/>
        </div>
    );
};
export default TodoMain;

