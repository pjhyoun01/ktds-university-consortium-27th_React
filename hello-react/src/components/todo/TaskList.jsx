import TaskItems, {TodoItemForChildren} from "./TaskItems.jsx";

const TaskList = ({todoDatas}) => {

    const priorities = ["없음", "높음", "보통", "낮음"];

    return (
        <>
            {todoDatas.map((todo) => (
                // <TaskItems todo={todo} priorities={priorities} />
                <TodoItemForChildren>
                    <input type="checkbox" id={todo.id}/>
                    <label htmlFor={todo.id}>{todo.todo}</label>
                    <span className="due-date">{todo.dueDate}</span>
                    <span className="priority">{priorities[todo.priority]}</span>
                </TodoItemForChildren>
            ))}
        </>
    )
}
export default TaskList;