// ecma function (fat arrow function)
// const: 상수를 정의하는 키워드
// const a = (parameter) => {function body}

// function과 fat arrow function의 기능적 차이
// function => 함수를 호출한 대상을 this객체로 알 수 없음
// fat arrow function => this 키워드 사용 불가
//                          함수를 호출한 대상을 event 파라미터로만 알 수 있음

// export default 이후에 const 키워드를 사용할 수 없음
import TaskHeader from "./TaskHeader.jsx";
import TaskItems from "./TaskItems.jsx";
import TodoAppender from "./TodoAppender.jsx";
import TaskList from "./TaskList.jsx";

const TodoMain = () => {
  // const ==> 상수 정의
  // let ==> 변수 정의 (반복문 외 잘 사용하지 않음)
  // TODO JSON DATA
  const todoDatas = [
    {
      id: "todo_1",
      todo: "react compent master 1",
      dueDate: "2026-03-23",
      priority: 1,
    },
    {
      id: "todo_1",
      todo: "react compent master 3",
      dueDate: "2026-03-23",
      priority: 2,
    },
    {
      id: "todo_1",
      todo: "react compent master 2",
      dueDate: "2026-03-23",
      priority: 3,
    },
    {
      id: "todo_1",
      todo: "react compent master 4",
      dueDate: "2026-03-23",
      priority: 0,
    },
  ];

  const onTaskKeyUpHandler = () => {
    console.log("추가");
  };
  const onPriorityChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const onSaveClickHandler = () => {
    console.log("저장");
  };

  // 컴포넌트가 만들어줄 HTML Tag set 을 반환
  return (
    <div className="wrapper">
      <header>React Todo</header>
      <ul className="tasks">
        <TaskHeader />
        <TaskList todoDatas={todoDatas} />
      </ul>
      <TodoAppender onTaskKeyUp={onTaskKeyUpHandler} onPriorityChange={onPriorityChangeHandler} onSaveClick={onSaveClickHandler} />

    </div>
  );
};
export default TodoMain;

