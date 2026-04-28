import TaskItems, {TodoItemForChildren} from "./TaskItems.jsx";
import {useContext} from "react";
import {TodoContext} from "./context/TodoContext.jsx";

const TaskList = () => {
    const priorities = ["없음", "높음", "보통", "낮음"];

    const {todos} = useContext(TodoContext);

    return (
        <>
            {todos.map(({id}) => (
                <TaskItems key={id} id={id} priorities={priorities}/>
            ))}
        </>
    )
}
export default TaskList;