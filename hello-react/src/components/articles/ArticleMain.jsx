/** @format */
// articles.json 파일 불러오기
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import articleData from "./articles.json";
import ArticleWriter from "./ArticleWriter.jsx";
import {useState} from "react";

const ArticleMain = () => {

    const [articles, setArticles] = useState(articleData.articles);
    const [writerForm, setWriterForm] = useState(false);

    const [{subject, name, email, content}, setInputData] = useState({
        subject: "",
        name: "",
        email: "",
        content: "",
    });

    const onSubjectChangeHandler = (event) => {
        setInputData(prevData => (
            {...prevData, subject: event.target.value}
        ))
    }
    const onNameChangeHandler = (e) => {
        setInputData(prevData => (
            {...prevData, name: e.target.value}
        ))
    }
    const onEmailChangeHandler = (e) => {
        setInputData(prevData => (
            {...prevData, email: e.target.value}
        ))
    }
    const onContentChangeHandler = (e) => {
        setInputData(prevData => (
            {...prevData, content: e.target.value}
        ))

    }

    const removeHandler = () => {
        setInputData({
            subject: "",
            name: "",
            email: "",
            content: "",
        })
        setWriterForm(false);
    }

    // TODO "000001" 형식으로 바꿔보기
    // const [temp, setTemp] = useState("");
    // (6 - String(articles).length).forEach(() => (setTemp(prevData => (prevData + "0"))));
    // console.log(temp)
    // console.log(articles);
    const onClickSaveButtonHandler = () => {
        setArticles(prevData => (

            [...prevData, {
                id: "BO-20260423-",
                subject,
                content,
                email,
                viewCnt: 1001,
                crtDt: "2026-04-23 09:10:11",
                mdfyDt: "2026-04-23 09:15:23",
                fileGroupId: "FG-20260423-000001",
                membersVO: {email, name},
                files: [
                    {
                        fileNum: 1,
                        fileGroupId: "FG-20260423-000001",
                        displayName: "Testfile.exe",
                        fileLength: 15000
                    }]
            }]
        ))

        removeHandler();
    }

    const onClickCancleButtonHandler = () => {
        removeHandler();
    }

    const onClickWriterFormHandler = () => {
        setWriterForm(prevData => (!prevData));
    }

    return (
        <div className="wrapper">
            <div>{articles.length}개의 게시글이 검색되었습니다.</div>
            <table>
                <ArticleHeader/>
                <ArticleList contents={articles}/>
            </table>
            {writerForm === false ? (
                <button onClick={onClickWriterFormHandler}>글쓰기</button>
            ) : (
                <ArticleWriter inputData={{subject, name, email, content}} onSubjectChange={onSubjectChangeHandler}
                               onNameChange={onNameChangeHandler} onEmailChange={onEmailChangeHandler}
                               onContentChange={onContentChangeHandler} onClickSaveButton={onClickSaveButtonHandler}
                               onClickCancleButton={onClickCancleButtonHandler}/>
            )}
        </div>
    );
}

export default ArticleMain;
