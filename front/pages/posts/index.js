import axios from 'axios';
import Link from 'next/link'

function PostList({ posts = [] }) {

    return <>
        <h1>List of posts</h1>
        {
            posts.map(post => (
                <div key={post.id}>
                    <Link href={`posts/${post.id}`} >
                        <h2>
                            {post.id}--{post.title}
                        </h2>
                    </Link>
                    <hr />
                </div>
            ))
        }
    </>
}

PostList.getInitialProps = async ctx => {
    try {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
        return { posts: data.slice(0, 3) };
    } catch (error) {
        return { errorLoading: true }
    }
}

export default PostList;
