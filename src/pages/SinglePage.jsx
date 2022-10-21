import React,{useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"

const SinglePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [post, setPost] = useState(null)

    const goBack = () => navigate(-1)
    // const goHome = () => navigate('/', {replace: true})

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {/* Bad link */}
            {/* <button onClick={goHome}>Go Home</button> */}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
            )}
        </div>

    )
}

export default SinglePage