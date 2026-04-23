const TodoAppender = ({onTaskKeyUp, onPriorityChange, onSaveClick}) => {
    return (
        <footer>
            <input type="text" placeholder="Task" onKeyUp={onTaskKeyUp} />
            <input type="date" onChange={onPriorityChange} />
            <select>
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