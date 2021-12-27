import axios from 'axios'
import { useState } from 'react'

function CommentsPage (){
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const fetchComments = async () => {
        const { data } = await axios(`/api/comments`)
        setComments(data)
    }

    const submitComment = async() =>{
        const {data} = await axios.post(`/api/comments`,{comment},{
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log(data)
    }

    const deletComment = async(commentId) => {
        const { data } = await axios.delete(`/api/comments/${commentId}`)
        console.log(data);
        fetchComments()
    }

    return (
        <>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
            <button onClick={submitComment}>Submit comment</button>
            <button onClick={fetchComments} >Load comments</button>
            {comments.map(comment => (
                <div key={comment.id}>
                    {comment.id} {comment.text}
                    <button onClick={()  => deletComment(comment.id)} >Delete</button>
                </div>
            ))}
        </>
    )
}

export default CommentsPage;