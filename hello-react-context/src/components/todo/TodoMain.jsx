// ecma function (fat arrow function)
// const: 상수를 정의하는 키워드
// const a = (parameter) => {function body}

// function과 fat arrow function의 기능적 차이
// function => 함수를 호출한 대상을 this객체로 알 수 없음
// fat arrow function => this 키워드 사용 불가
//                          함수를 호출한 대상을 event 파라미터로만 알 수 있음

// export default 이후에 const 키워드를 사용할 수 없음
import TaskHeader from "./TaskHeader.jsx";
import TodoAppender from "./TodoAppender.jsx";
import TaskList from "./TaskList.jsx";
import TodoContextProvider from "./context/TodoContext.jsx";

const TodoMain = () => {

    return (
        <div className="wrapper">
            <TodoContextProvider>
                <header>React Todo</header>
                <ul className="tasks">
                    <TaskHeader/>
                    <TaskList/>
                </ul>
                <TodoAppender/>
            </TodoContextProvider>
        </div>
    );
};
export default TodoMain;

