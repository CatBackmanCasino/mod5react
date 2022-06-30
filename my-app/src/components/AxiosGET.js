import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosGET() {
    const [post, setPost] = useState("This will change");
    const [posts, setPosts] = useState(null)

    const click = (e) => {
        setPost(e)
    }

    useEffect(() => {
        console.log("useEffect")
    }, [])

    const resetPost = () => {
        setPost("This will change - Reset")
    }

    const showPosts = () => {

        axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then(response => {
                const newPosts = response
                setPosts(response)
            })
    }

    return (
        <div>
            <h1>{post}</h1>
            <button onClick={
                (e) => { click(e.target.value) }
            } value="poop">poop</button>
            <button onClick={
                (e) => { click(e.target.value) }
            } value="hoe">hoe</button>
            <button onClick={resetPost}>Reset</button>
            <button onClick={showPosts}>Show Posts</button>
            <div>
                <h1>posts</h1>
                {
                    posts !== null ?
                        posts.data.map((post) => (
                            <div key={posts.id}>
                                <p>{post.title}</p>
                                <hr />
                            </div>
                        ))
                        :
                        <p>No Posts</p>
                }


            </div>
        </div>
    )
}

export default AxiosGET