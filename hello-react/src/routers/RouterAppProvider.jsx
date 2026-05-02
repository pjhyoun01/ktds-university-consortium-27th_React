import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ArticleMain} from "../components/articles/ArticleMain.jsx";
import TodoMain from "../components/todo/TodoMain.jsx";
import {Header} from "../components/common/Header.jsx";
import {Main} from "../components/common/Main.jsx";
import {Layout} from "./Layout.jsx";

export const RouterAppProvider = () => {
    const routers = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Main/>,
                },
                {
                    path: "/article",
                    element: <ArticleMain/>
                },
                {
                    path: "/todo",
                    element: <TodoMain/>
                }
            ]
        },
    ]);
    return (
        <RouterProvider router={routers}/>
    )
}