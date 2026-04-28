import TaskItems from "./TaskItems.jsx";
import {useContext} from "react";
import {TodoContext} from "./context/TodoContext.jsx";

const TaskList = ({children}) => {

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
export default TaskList;