function News({ data }) {
    return <h1 className="content" >{data}</h1>
}

export default News

export async function getStaticProps(ctx) {
    console.log(ctx)
    return {
        props: {
            data: ctx.preview ? "List of draft articles" : "List of published articles"
        }
    }
}