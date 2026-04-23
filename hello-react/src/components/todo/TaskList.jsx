import TaskItems, {TodoItemForChildren} from "./TaskItems.jsx";

const TaskList = ({data, onDoneChange}) => {

    const priorities = ["없음", "높음", "보통", "낮음"];

    return (
        <>
            {data.map((todo) => (
                <TaskItems todo={todo} priorities={priorities} onDoneChange={onDoneChange}/>
                // <TodoItemForChildren>
                //     <input type="checkbox" id={todo.id}/>
                //     <label htmlFor={todo.id}>{todo.todo}</label>
                //     <span className="due-date">{todo.dueDate}</span>
                //     <span className="priority">{priorities[todo.priority]}</span>
                // </TodoItemForChildren>
            ))}
        </>
    )
}
export default TaskList;