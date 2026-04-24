const TaskHeader = ({onAllDoneChange}) => {
    return (
        <li className="tasks-header">
            <input type="checkbox" id="checkall" onChange={onAllDoneChange}/>
            <label>Task</label>
            <span className="due-date">Due date</span>
            <span className="priority">priority</span>
        </li>
    )
}
export default TaskHeader