import React from "react"
import { Link, useLoaderData, useSearchParams } from "react-router-dom"
import BlogFilter from "../components/BlogFilter"

const BlogPage = () => {
    const posts =  useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post') || ''
    //url.by /posts?post=23&data=sashaFront
    const latest = searchParams.has('latest')

    const startsFrom = latest ? 80 : 1

    return (
        <div>
            <h1>Our news</h1>

            <BlogFilter postQuery={postQuery}
                        latest={latest}
                        setSearchParams={setSearchParams}
            />

            <Link to={'/posts/new'}
                  style={{margin: '1rem ', display: 'inline-block'}}
            >
                Add new post
            </Link>

            {
                posts.filter(
                    post => post.title.includes(postQuery.toLocaleLowerCase()) && post.id >= startsFrom
                ).map( post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }

        </div>
    )
}

const blogLoader = async ({request, params}) => {
    // console.log('blog', {request, params})
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

export {blogLoader}

export default BlogPage