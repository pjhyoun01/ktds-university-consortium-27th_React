import TodoItems from "./TodoItems.jsx";
import {useContext} from "react";
import {TodoContext} from "./context/TodoContext.jsx";

const TodoList = ({children}) => {

    const {componentName} = useContext(TodoContext);
    if (!componentName || componentName !== "TodoGrid") {
        return <></>;
    }

    const providerProps = {
        componentName: "TodoList",
    }

    return (
            <TodoContext.Provider value={providerProps}>
                {children}
            </TodoContext.Provider>
    )
}
export default TodoList;