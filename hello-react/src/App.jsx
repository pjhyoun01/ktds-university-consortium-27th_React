import {ToolkitProvider} from "./stores/toolkit/ToolkitProvider.jsx";
import {ArticleMain} from "./components/articles/ArticleMain.jsx";

export default function App() {
    return (
        <ToolkitProvider>
            <ArticleMain/>
        </ToolkitProvider>
    );
}
