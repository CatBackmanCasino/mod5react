import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.category = React.createRef();
        this.comment = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Name:", this.inputName.current.value)
        console.log("Category:", this.category.current.value)
        console.log("Comment:",this.comment.current.value)
        
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            id="id-name"
                            name="name"
                            type="text"
                            ref={this.inputName}
                        />

                    </div>
                    <div>
                        <label htmlFor="id-category">Query Category:</label>
                        <select
                            id="id-category"
                            name="category"
                            ref={this.category}
                        >
                            <option value="mobile">Mobile</option>
                            <option value="network">Network</option>
                            <option value="other ">other</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="comments">Comment:</label>
                        <input
                            type="text"
                            name="comment"
                            id="id-comment"
                            ref={this.comment} />
                           
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm