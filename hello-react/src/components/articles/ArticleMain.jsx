import {useEffect, useRef, useState} from "react";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleWriter from "./ArticleWriter.jsx";
import {fetchArticleList, fetchJsonWebToken} from "../../http/article/fetchArticle.js";

export const ArticleMain = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const [token, setToken] = useState();
    const [viewPageNo, setViewPageNo] = useState(0);
    const onPaginationButtonClickHandler = (nextPageNo) => {
        setViewPageNo(nextPageNo);
    };

    const [
        {
            count,
            result: articles,
            pagination: {pageNo = 0, pageCount = 0},
        },
        setArticles,
    ] = useState({
        count: 0,
        result: [],
        pagination: {},
    });

    const refreshArticleList = async () => {
        const articleList = await fetchArticleList(viewPageNo);
        /*  articleList의 구조
        {
          result: { count: 0, result: [] },
          pagination: {},
        }
        */
        const {
            result: {count, result},
            pagination,
        } = articleList;

        setArticles({count, result, pagination});

        if (articleList.error) {
            alert(articleList.error);
        }
    };

    useEffect(() => {
        refreshArticleList();
    }, [viewPageNo]);

    const refreshToken = async () => {
        const jwt = await fetchJsonWebToken(emailRef.current.value, passwordRef.current.value);
        console.log(jwt.token)
        setToken(jwt);
    }


    const onAddArticleClickHandler = (subject, name, email, content) => {
        setArticles((prevData) => [
            ...prevData,
            {
                id: prevData.length + 1,
                subject,
                content,
                email,
                viewCnt: parseInt(Math.random() * 10000),
                crtDt: "2026-01-01",
                mdfyDt: null,
                fileGroupId: null,
                membersVO: {email, name},
                files: [],
            },
        ]);
    };

    return (
        <div className="wrapper">
            {!token ? (
                <div>
                    <div>
                        <label htmlFor="">이메일</label>
                        <input type="text" ref={emailRef}/>
                    </div>
                    <div>
                        <label htmlFor="">비밀번호</label>
                        <input type="text" ref={passwordRef}/>
                    </div>

                    <button onClick={refreshToken}>로그인</button>
                </div>
            ) : <></>}
            <div>{count}개의 게시글이 검색되었습니다.</div>
            <table>
                <ArticleHeader/>
                <ArticleList contents={articles}/>
            </table>
            <div>
                {pageNo > 0 && (
                    <button
                        onClick={onPaginationButtonClickHandler.bind(this, pageNo - 1)}
                    >
                        이전
                    </button>
                )}
                {pageNo === 0 && pageCount - 1 > pageNo && (
                    <button
                        onClick={onPaginationButtonClickHandler.bind(this, pageNo + 1)}
                    >
                        다음
                    </button>
                )}
            </div>
            <ArticleWriter onAddArticleClick={onAddArticleClickHandler}/>
        </div>
    );
};