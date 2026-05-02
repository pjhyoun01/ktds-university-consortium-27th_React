import {Link} from "react-router-dom";
import {Login} from "../articles/Login.jsx";

export const Header = () => {
    return (
        <div className="wrapper">
            <a>
                <Link to="/article">게시글</Link>
            </a>
            <a>
                <Link to="/todo">Todo</Link>
            </a>
                <Login/>
        </div>
    )
}