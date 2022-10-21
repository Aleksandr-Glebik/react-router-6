import React, { Suspense } from "react"
import { Link, useLoaderData, useSearchParams, Await, json } from "react-router-dom"
import BlogFilter from "../components/BlogFilter"

const BlogPage = () => {
    const {posts} =  useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post') || ''
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

            <Suspense fallback={<h3>Loading...</h3>}>
                <Await resolve={posts}>
                    {
                        (resolvedPosts) => (
                        <>
                        {
                            resolvedPosts.filter(
                                post => post.title.includes(postQuery.toLocaleLowerCase()) && post.id >= startsFrom
                            ).map( post => (
                                <Link key={post.id} to={`/posts/${post.id}`}>
                                    <li>{post.title}</li>
                                </Link>
                            ))
                        }
                        </>)
                    }
                </Await>
            </Suspense>
        </div>
    )
}

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/postsssssssss')
    // if(!res.ok) {
    //     throw new Response('', {status: res.status, statusText: 'Not found posts'})
    // }
    return res.json()
}

const blogLoader = async () => {
    const posts = getPosts()

    if (!posts.length) {
        throw json({message: 'Not Found', reason: 'Wrong URL'}, {status: 404})
    }

    return {
        posts: posts
    }
}

export {blogLoader}

export default BlogPage