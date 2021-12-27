import axios from 'axios';

function NewArticleList({ articles = [] }) {
    return <>
        <h1>List of News Articles</h1>
        {
            articles.map(article => (
                <div key={article.id} >
                    <h2>{article.id} {article.title} - {article.category}</h2>
                </div>
            ))
        }
    </>
}

export default NewArticleList

export async function getServerSideProps() {
    const { data } = await axios(`http://localhost:4000/news`)
    return {
        props: {
            articles: data
        }
    }
}
