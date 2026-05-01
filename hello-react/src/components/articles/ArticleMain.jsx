import {useEffect, useRef, useState} from "react";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleWriter from "./ArticleWriter.jsx";
import {fetchAddArticle, fetchArticleList, fetchLogin} from "../../http/article/fetchArticle.js";
import {isArray, isFunction, isNumber, isObject, isString} from "../../utils/type.js";
import {getValidationResult} from "../../utils/errorHandler.js";

export const ArticleMain = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const [token, setToken] = useState();
    const [loginErrors, setLoginErrors] = useState();
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

    const onClickLoginHandler = async () => {
        const loginResult = await fetchLogin(emailRef.current.value, passwordRef.current.value);

        if (loginResult.error) {
            setLoginErrors(getValidationResult(loginResult.error));
        } else {
            setToken(loginResult.token);
        }
    }


    const onAddArticleClickHandler = async (subject, content, attachfile) => {
        console.log(token)
        await fetchAddArticle(token, subject, content, attachfile);
    };

    return (
        <div className="wrapper">
            {!token && (
                <div>
                    {isString(loginErrors) && <div>{loginErrors}</div>}
                    <div>
                        <label htmlFor="">이메일</label>
                        <input type="text" ref={emailRef}/>
                        {loginErrors?.email && <div>{loginErrors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="">비밀번호</label>
                        <input type="password" ref={passwordRef}/>
                        {loginErrors?.password && <div>{loginErrors.password}</div>}
                    </div>

                    <button onClick={onClickLoginHandler}>로그인</button>
                </div>
            )}
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