import {ToolkitProvider} from "./stores/toolkit/ToolkitProvider.jsx";
import {RouterAppProvider} from "./routers/RouterAppProvider.jsx";

export default function App() {
    return (
        <ToolkitProvider>
            <RouterAppProvider/>
        </ToolkitProvider>
    );
}
