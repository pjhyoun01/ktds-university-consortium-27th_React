import {Header} from "../components/common/Header.jsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}