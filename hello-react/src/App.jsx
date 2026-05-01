// function App() {
//   return (
//     <div>
//       <p>App Component 입니다.</p>
//     </div>
//   );
// }

import TodoMain from "./components/todo/TodoMain";
import {ArticleMain} from "./components/articles/ArticleMain.jsx";
import {TmdbMain} from "./components/tmdb/TmdbMain.jsx";
import {ReactReduxProvider} from "./stores/redux/ReactReduxProvider.jsx";
import {ToolkitProvider} from "./stores/toolkit/ToolkitProvider.jsx";

// export default App;

// 위 아래 동일

export default function App() {
    return (
        // <ToolkitProvider>
            <ArticleMain/>
        // </ToolkitProvider>
    );
}
