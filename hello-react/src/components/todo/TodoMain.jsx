// ecma function (fat arrow function)
// const: 상수를 정의하는 키워드
// const a = (parameter) => {function body}

// function과 fat arrow function의 기능적 차이
// function => 함수를 호출한 대상을 this객체로 알 수 없음
// fat arrow function => this 키워드 사용 불가
//                          함수를 호출한 대상을 event 파라미터로만 알 수 있음

// export default 이후에 const 키워드를 사용할 수 없음
import TaskHeader from "./TaskHeader.jsx";
import TaskItems from "./TaskItems.jsx";
import TodoAppender from "./TodoAppender.jsx";
import TaskList from "./TaskList.jsx";
import {useState} from "react";

const TodoMain = () => {

    const [{todo, dueDate, priority}, setNewTodoData] = useState({
        todo: "",
        dueDate: "",
        priority: 0,
    })

    // const ==> 상수 정의
    // let ==> 변수 정의 (반복문 외 잘 사용하지 않음)
    // TODO JSON DATA
    const [data, setData] = useState([
        {
            id: "todo_1",
            todo: "react compent master 1",
            dueDate: "2026-03-23",
            priority: 1,
            isDone: false
        },
        {
            id: "todo_3",
            todo: "react compent master 3",
            dueDate: "2026-03-23",
            priority: 2,
            isDone: false
        },
        {
            id: "todo_2",
            todo: "react compent master 2",
            dueDate: "2026-03-23",
            priority: 3,
            isDone: false
        },
        {
            id: "todo_4",
            todo: "react compent master 4",
            dueDate: "2026-03-23",
            priority: 0,
            isDone: false
        },
    ]);

    const onDoneChangeHandler = (id) => {
        setData((prev) =>
            prev.map(item =>
                item.id === id ? {...item, isDone: !item.isDone} : item
            ))
    }

    // TODO 반전 고치기
    const onAllDoneChangeHandler = (e) => {
        e.target.checked === true ?
            setData((prevData) =>
                prevData.map(item => {
                        return {...item, isDone: true}
                    }
                )) :
            setData((prevData) =>
                prevData.map(item => ({...item, isDone: false})
                ))
    }

    const onTaskKeyUpHandler = (event) => {
        setNewTodoData((prevData) => (
            {...prevData, todo: event.target.value}
        ))
    };

    const onDateChangeHandler = (event) => {
        setNewTodoData((prevData) => (
            {...prevData, dueDate: event.target.value}
        ))
    }

    const onPriorityChangeHandler = (event) => {
        setNewTodoData((prevData) => (
            {...prevData, priority: parseInt(event.target.value)}
        ))
    };
    const onSaveClickHandler = () => {
        setData((prevData) => [
            ...prevData, {id: prevData.length + 1, todo, dueDate, priority, isDone: false}
        ])
        setNewTodoData({
            todo: "",
            dueDate: "",
            priority: 0,
        })
    };

    // 컴포넌트가 만들어줄 HTML Tag set 을 반환
    return (
        <div className="wrapper">
            <header>React Todo</header>
            <ul className="tasks">
                <TaskHeader onAllDoneChange={onAllDoneChangeHandler}/>
                <TaskList data={data} onDoneChange={onDoneChangeHandler}/>
            </ul>
            <TodoAppender inputData={{todo, dueDate, priority}} onTaskKeyUp={onTaskKeyUpHandler}
                          onDateChange={onDateChangeHandler}
                          onPriorityChange={onPriorityChangeHandler}
                          onSaveClick={onSaveClickHandler}/>

        </div>
    );
};
export default TodoMain;

