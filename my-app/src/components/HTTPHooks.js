import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState (null)
    const postToApi = () => {
        axios.post(
            "https://jsonplaceholder.typicode.com/posts/",
            {
                title: "Hello World",
                body: "it works",
                userId: 123,
            }
        ).then(response => {
            setPostMessage(response.status === 201
                ? `Success! Post ${response.data.title}`
                : `Failed`)
        })
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/5")
            .then(response => {
                const data = Array.isArray(response.data)
                    ? response.data
                    : [response.data]
                setPosts(data)
                console.log("posts:", posts)
            })
            .catch(error => {
                setError(error.message);

            })
    }, [])

    return (
        <div>
            <button onClick={postToApi}>Create Post</button>
            <p>{postMessage}</p>
            <h2>Posts</h2>
            {
                posts.length ?
                    posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.id}. {post.title}</h2>
                            <h4>By: {post.userId}</h4>
                            <p>{post.body}</p>
                        </div>
                    ))
                    :
                    error ? <p>{error}</p> : "Loading..."
            }
        </div>
    )
}

export default HTTPHooks