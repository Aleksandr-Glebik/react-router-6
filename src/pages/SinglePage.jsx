import React, { Suspense } from "react"
import { useNavigate, Link, useLoaderData, Await, useAsyncValue } from "react-router-dom"

const Post = () => {
    const post = useAsyncValue()

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

const SinglePage = () => {
    const {post, id} = useLoaderData()
    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <Suspense fallback={<h3>Loading...</h3>}>
                <Await resolve={post}>
                    <Post />
                </Await>
            </Suspense>
            <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </div>

    )
}

async function getPostById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}

export const postLoader = async ({params}) => {
    const id = params.id
    return {post: getPostById(id), id}
}

export default SinglePage