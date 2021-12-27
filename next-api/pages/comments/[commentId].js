import { comments } from "../../data/comments"

function Comment({ comment }) {
    return (
        <div>
            {comment.id}. {comment.text}
        </div>
    )
}

export default Comment

export async function getStaticPaths() {
    return {
        paths: [
            { params: { commentId: 1 } },
            { params: { commentId: 2 } },
            { params: { commentId: 3 } }
        ],
        fallback: false
    }
}

export default function getStaticProps(ctx) {
    const { params: { commentId } } = ctx;
    const comment = comments.find(comment => comment.id === parseInt(commentId))
    console.log(comment);
    return {
        props: {
            comment,
        }
    }
}