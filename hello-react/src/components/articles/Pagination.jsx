import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchArticleList} from "../../http/article/fetchArticle.js";
import {articleActions} from "../../stores/toolkit/slices/articleSlice.js";

export const Pagination = () => {

    const pagination = useSelector(state => state.article.list.pagination);

    const storeDispatcher = useDispatch()
    const [viewPageNo, setViewPageNo] = useState(0);
    const refreshArticleList = async () => {
        const articleList = await fetchArticleList(viewPageNo);

        if (articleList.error) {
            alert(articleList.error);
        } else {
            storeDispatcher(articleActions.loadArticles(articleList))
        }
    };

    useEffect(() => {
        refreshArticleList();
    }, [viewPageNo]);

    const onPaginationButtonClickHandler = (nextPageNo) => {
        setViewPageNo(nextPageNo);
    };


    return (
        <div>
            {pagination?.pageNo > 0 && (
                <button onClick={onPaginationButtonClickHandler.bind(this, pagination?.pageNo - 1)}>
                    이전
                </button>
            )}
            {(pagination?.pageNo === 0 || pagination?.pageCount - 1 > pagination?.pageNo) && (
                <button onClick={onPaginationButtonClickHandler.bind(this, pagination?.pageNo + 1)}>
                    다음
                </button>
            )}
        </div>
    )
}