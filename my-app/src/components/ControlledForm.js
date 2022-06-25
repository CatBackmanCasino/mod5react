import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            category: "",
            comment: "",
        }
    }
    handleNameChange = ((event) => {
        this.setState({
            name: event.target.value
        })
    })

    handleCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state)

    }

    render() {
        return (
            <div>
                <h2>Please fill out the form:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            id="id-name"
                            name="name"
                            type="text" />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query Category:</label>
                        <select
                            id="id-category"
                            name="category"
                            onChange={this.handleCategory}>
                            <option value="mobile">Mobile</option>
                            <option value="network">Network</option>
                            <option value="other ">other</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="comments">Comment:</label>
                        <input
                            onChange={this.handleComment}
                            type="text"
                            name="comment"
                            id="id-comment" />
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm