const TaskItems = ({todo, priorities, onDoneChange}) => {
    // props todo의 이름과 todo.todo의 이름이 같아 객체 구조 분해 불가
    // todo.todo의 이름을 todoTask로 변경해 할당
    const {id, todo:todoTask, dueDate, priority, isDone} = todo;

    const doneClass = isDone ? 'done' : 'not-done';

    return (
        <li className="task-item">
            <input type="checkbox" id={id} onChange={() => onDoneChange(id)} checked={isDone} />
            <label className={doneClass} htmlFor={id}>{todoTask}</label>
            <span className={`due-date ${doneClass}`}>{dueDate}</span>
            <span className={`priority ${doneClass}`}>{priorities[priority]}</span>
        </li>
    )
}
export default TaskItems;

export const TodoItemForChildren = ({children}) => {

    return (
        <li className="task-item">
            {children}
        </li>
    )
}
