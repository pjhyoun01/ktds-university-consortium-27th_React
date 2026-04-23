// function App() {
  //   return (
    //     <div>
    //       <p>App Component 입니다.</p>
//     </div>
//   );
// }

import TodoMain from "./components/todo/TodoMain";

// export default App;

// 위 아래 동일

export default function App() {
  return (
    <>
      <TodoMain />
    </>
  );
}
