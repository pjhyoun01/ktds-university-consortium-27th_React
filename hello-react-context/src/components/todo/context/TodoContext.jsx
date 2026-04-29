import {createContext, useState} from "react";

export const TodoContext = createContext({
    todos: [],
    done(todoId) {
    },
    allDone(doneState) {
    },
    addTodo(taskName, dueDate, priority) {
    },
    getTodo(todoId) {
    },

});

//TodoContext를 제공하는 컴포넌트
const TodoContextProvider = ({children}) => {

    const [data, setData] = useState([
        {
            id: "todo_1",
            todo: "react compent master 1",
            dueDate: "2026-03-23",
            priority: 1,
            done: false
        },
        {
            id: "todo_3",
            todo: "react compent master 3",
            dueDate: "2026-03-23",
            priority: 2,
            done: false
        },
        {
            id: "todo_2",
            todo: "react compent master 2",
            dueDate: "2026-03-23",
            priority: 3,
            done: false
        },
        {
            id: "todo_4",
            todo: "react compent master 4",
            dueDate: "2026-03-23",
            priority: 0,
            done: false
        },
    ]);

    const todoContextProps = {
        todos: data,
        done(todoId) {
            setData((prevState) =>
                prevState.map(item =>
                    item.id === todoId ? {...item, done: !item.done} : item
                ))
        },
        allDone(doneState) {
            doneState ?
                setData((prevState) =>
                    prevState.map(item => {
                            return {...item, done: true}
                        }
                    )) :
                setData((prevState) =>
                    prevState.map(item => ({...item, done: false})
                    ))
        },
        addTodo(taskName, dueDate, priority) {
            setData((prevState) => [
                ...prevState, {id: prevState.length + 1, todo: taskName, dueDate, priority, done: false}
            ])
        },
        getTodo(todoId) {
            const todo = data.find((item) => item.id === todoId);
            return todo;
        },
    };

    // Context의 Provider 값을 공유받을 수 있는 컴포넌트는
    // Context.Provider의 자식 컴포넌트만 대상
    return (
        <TodoContext.Provider value={todoContextProps}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;