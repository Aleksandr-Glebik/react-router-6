import React from "react"
// import { useLoaderData, useParams } from "react-router-dom"
import { useActionData, useLoaderData, useNavigation } from "react-router-dom"
import UpdatePost from "../components/UpdatePost"

const EditPost = () => {
    // const {id} = useParams()
    const {post, id } = useLoaderData()
    const navigation = useNavigation()
    const data = useActionData()

    return (
        <div>
            <h1>Edit Post {id}</h1>
            {data?.message && <div style={{color: 'blue', margin: '1rem'}}>{data.message}</div> }
            <UpdatePost {...post} submitting={navigation.state === 'submitting' }/>
        </div>
    )
}

const updatePost = async (post) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
        method: 'PUT',
        body: post
    })
    return res.json()
}

export const updatePostAction = async ({request}) => {
    const formData = await request.formData()
    const updatedPost = await updatePost(formData)

    if (!formData.get('title') || !formData.get('body')) {
        return {message: 'All field are required !!!'}
    }

    return {message: `Post ${updatedPost.id} was successfully updated`}
}

export default EditPost