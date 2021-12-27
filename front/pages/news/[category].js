import axios from 'axios'

function ArticleListByCategory({ articles, category }) {
    return (
        <>
            <h1>Showing news for category <i>{category}</i></h1>
            {
                articles.map(article => (
                    <div key={article.id} >
                        <h2>{article.id} {article.title}</h2>
                        <p>{article.description}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(ctx) {
    const { params: { category }, req, res, query } = ctx
    console.log(query)
    res.setHeader('Set-Cookie', ['name=Juan'])
    const { data } = await axios(`http://localhost:4000/news?category=${category}`)
    return {
        props: {
            articles: data,
            category
        }
    }
}