import articleData from './articles.json'
import {ArticleHeader} from "./ArticleHeader.jsx";
import {ArticleList} from "./ArticleList.jsx";
import {ArticleWriter} from "./ArticleWriter.jsx";
import "./article.css"

const ArticleMain = () => {
    // console.log(articleData);

    return (
        <div className="article-main">
            <table>
                <thead>
                <ArticleHeader/>
                </thead>
                <tbody>
                {articleData.articles.map((article) => (
                    <ArticleList article={article}/>
                ))}
                </tbody>
            </table>
            <ArticleWriter/>
        </div>
    )
}
export {ArticleMain}