const TaskHeader = () => {
    return (
        <li className="tasks-header">
            <input type="checkbox" id="checkall" />
            <label>Task</label>
            <span className="due-date">Due date</span>
            <span className="priority">priority</span>
        </li>
    )
}
export default TaskHeader