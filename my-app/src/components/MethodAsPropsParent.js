import React, { Component } from 'react'
import MethodAsPropsChild from './MethodAsPropsChild'

export class MethodAsPropsParent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            isLoggedIn: false,
        }
    }

    HandleSignIn = () => {
        this.setState({
            isLoggedIn: true,
        })
        console.log(this)
    }

    HandleSignOut = () => {
        this.setState({
            isLoggedIn: false,
        })
    }

    ToggleIsLoggedIn = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn
        }))
    }

    render() {
        return (
            <div>
                <MethodAsPropsChild
                    isLoggedIn={this.state.isLoggedIn}
                    ToggleIsLoggedIn={this.ToggleIsLoggedIn} />
            </div>
        )
    }
}

export default MethodAsPropsParent