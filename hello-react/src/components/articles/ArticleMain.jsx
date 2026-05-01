import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleWriter from "./ArticleWriter.jsx";
import {useSelector} from "react-redux";
import {Login} from "./Login.jsx";
import {Pagination} from "./Pagination.jsx";

export const ArticleMain = () => {
    const articles = useSelector(state => state.article.list.result);
    const token = useSelector(state => state.article.token);

    return (
        <div className="wrapper">
            {!token && (
                <Login/>
            )}
            <div>{articles?.count}개의 게시글이 검색되었습니다.</div>
            <table>
                <ArticleHeader/>
                <ArticleList/>
            </table>
            <Pagination/>
            <ArticleWriter/>
        </div>
    );
};