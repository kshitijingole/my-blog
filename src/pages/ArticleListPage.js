import articles from "./article-content";
import ArticleListComponent from "../components/ArticleListComponent";

const ArticleListPage = () => {

    return (
        <div>
            <h1>Articles</h1>
            <ArticleListComponent articles={articles} />
        </div>
    );
}

export default ArticleListPage;