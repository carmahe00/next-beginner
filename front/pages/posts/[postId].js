import axios from 'axios';

function Post({ post }) {

    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post

export async function getStaticPaths() {
    /* const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    const paths = data.map(post => ({
        params: {
            postId: `${post.id}`
        }
    }))
    return {
        paths,
        fallback: false,
    }; */
    return {
        paths: [
            { params: { postId: "1" } }, // See the "paths" section below
            { params: { postId: "2" } },
            { params: { postId: "3" } },
        ],
        fallback: "blocking",
    };
}

export async function getStaticProps(ctx) {
    try {
        const { params } = ctx
        const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
        console.log(`data 404: ${data}`)
        if (!data.id){
            return {
                notFound: true,
            }
        }
        console.log(`Generating page for /posts/${params.postId}`)
        return { props: { post: data }, };
    } catch (error) {
        return { errorLoading: true }
    }

}
