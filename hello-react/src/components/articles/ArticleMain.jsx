/** @format */
// articles.json 파일 불러오기
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import articleData from "./articles.json";
import ArticleWriter from "./ArticleWriter.jsx";
import ArticleWriter2 from "./ArticleWriter2.jsx";
import {useState} from "react";

const ArticleMain = () => {

    const [articles, setArticles] = useState(articleData.articles);

    const onClickSaveButtonHandler = (subject, name, email, content) => {
        const lpad = (str, length, defaultCharacter) => {
            const remainLength = length - (str + "").length;
            return defaultCharacter.repeat(remainLength) + str;
        };

        const getDateTime = (format) => {
            const now = new Date();

            return format
                .replaceAll("YYYY", now.getFullYear())
                .replaceAll("MM", lpad(now.getMonth() + 1, 2, "0"))
                .replaceAll("DD", lpad(now.getDate(), 2, "0"))
                .replaceAll("HH", lpad(now.getHours(), 2, "0"))
                .replaceAll("mm", lpad(now.getMinutes(), 2, "0"))
                .replaceAll("ss", lpad(now.getSeconds(), 2, "0"));
        };

        const makeId = (index) => {
            const seq = lpad(index, 6, "0");
            return `BO-${getDateTime("YYYYMMDD-")}${seq}`;
        };

        setArticles((prevData) => [
            ...prevData,
            {
                id: makeId(prevData.length + 1),
                subject,
                content,
                email,
                viewCnt: parseInt(Math.random() * 100),
                crtDt: getDateTime("YYYY-MM-DD HH:mm:ss"),
                mdfyDt: null,
                fileGroupId: null,
                membersVO: { email, name },
                files: [],
            },
        ]);
    }

    return (
        <div className="wrapper">
            <div>{articles.length}개의 게시글이 검색되었습니다.</div>
            <table>
                <ArticleHeader/>
                <ArticleList contents={articles}/>
            </table>
            <ArticleWriter onClickSaveButton={onClickSaveButtonHandler}/>
        </div>
    );
}

export default ArticleMain;
