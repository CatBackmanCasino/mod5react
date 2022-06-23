import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            isLoggedIn: true,
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.isLoaded ? "Data Loaded" : "Data Loading..."}</h1>
                {this.state.isLoggedIn ? (
                    <div>
                        <p>Welcome. Please complete the steps bellow</p>
                        <ol>
                            <li>Confirm your email adress</li>
                            <li>Complete your profile</li>
                            <li>Subscribe to newletter</li>
                        </ol>
                    </div>
                ) : (
                    <div>
                        <p>Please sign in.</p>
                    </div>
                ) };
            </div>
        )
    }
}

export default ConditionalRenderingClass