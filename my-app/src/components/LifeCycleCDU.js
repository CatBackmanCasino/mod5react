import React, { Component } from 'react'

export class LifeCycleCDU extends Component {
    constructor(props) {
        console.log("Constructor called")
        super(props)

        this.state = {
            greeting: "Hello!"
        }
    }

    updateGreeting = () => {
        console.log("updateGreeting")
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === "Hello!" ? "Goodbye" : "Hello!"
            }
        })
    }

    componentDidUpdate() {
        console.log("Component did update")
    }
    render() {
        console.log("Render")
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
            </div>
        )
    }
}

export default LifeCycleCDU