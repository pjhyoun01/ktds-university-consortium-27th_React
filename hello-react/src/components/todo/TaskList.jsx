import TaskItems from "./TaskItems.jsx";

const TaskList = ({todoDatas}) => {

    const priorities = ["없음", "높음", "보통", "낮음"];

    return (
        <>
            {todoDatas.map((todo) => (
                <TaskItems todo={todo} priorities={priorities}/>
            ))}
        </>
    )
}
export default TaskList;