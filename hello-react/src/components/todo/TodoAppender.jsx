const TodoAppender = ({inputData: {todo, dueDate, priority}, onTaskKeyUp, onDateChange, onPriorityChange, onSaveClick}) => {
    return (
        <footer>
            <input type="text" placeholder="Task" onChange={onTaskKeyUp} value={todo} />
            <input type="date" onChange={onDateChange} value={dueDate} />
            <select onChange={onPriorityChange} value={priority}>
                <option>우선순위</option>
                <option value="1">높음</option>
                <option value="2">보통</option>
                <option value="3">낮음</option>
            </select>
            <button type="button" onClick={onSaveClick}>
                Save
            </button>
        </footer>
    )
}
export default TodoAppender;