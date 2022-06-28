import React, { Component } from 'react'
import axios from "axios"

export class HTTPPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      apiResponse: null
    }
  }

  postToApi = () => {
    axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "Hello World",
        body: "it works",
        userId: 123,
      }
    ).then(response => {
      console.log(response)
      this.setState({
        apiResponse: response.data,
      })
    })
  }

  render() {
    const { apiResponse } = this.state;
    return (
      <div>
        <button onClick={this.postToApi}>Create Post</button>
        {
          apiResponse ?
            <div>
              <h1>there is a response</h1>
              <h2>{apiResponse.title}</h2>
              <p>{apiResponse.userId}</p>
              <p>{apiResponse.body}</p>
              <hr />
            </div>
            :
            <div>
              <h2>there are no posts!</h2>
            </div>
        }
      </div>

    )
  }
}

export default HTTPPost