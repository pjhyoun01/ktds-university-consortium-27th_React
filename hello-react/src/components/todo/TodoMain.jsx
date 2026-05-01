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
import {useEffect} from "react";
import {TodoGrid} from "./TodoGrid.jsx";
import {fetchTodoList} from "../../http/todo/fetchTodo.js";
import {useDispatch, useSelector} from "react-redux";
import {todoAction} from "../../stores/toolkit/slices/todoSlice.js";

const TodoMain = () => {

    // Store에서 todo state를 가져온다
    const todoList = useSelector((state) => state.todo.list);
    const storeDispatcher = useDispatch();
    // const ==> 상수 정의
    // let ==> 변수 정의 (반복문 외 잘 사용하지 않음)
    // TODO JSON DATA
    // const [data, setData] = useState([]);

    const fetchTodoListData = async () => {

        const fetchResult = await fetchTodoList();
        if (!fetchResult) {
            alert(fetchResult.errors)
        }
        // setData(fetchResult.body)
        storeDispatcher(todoAction.refresh(fetchResult.body));


    };
    useEffect(() => {
        fetchTodoListData();
    }, []);

    // 컴포넌트가 만들어줄 HTML Tag set 을 반환
    return (
        <div className="wrapper">
            <header>React Todo</header>
            <TodoGrid>
                <TodoHeader/>
                <TodoList>
                    {todoList.map((todo) => (
                        <TodoItems key={todo.id} todo={todo}/>
                    ))}
                </TodoList>
            </TodoGrid>
            <TodoAppender/>
        </div>
    );
};
export default TodoMain;

