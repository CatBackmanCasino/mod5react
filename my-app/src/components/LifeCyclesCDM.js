import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log("Constructor called")
        super(props)

        this.state = {
            data: "Loading..."
        }
    }
    getData() {
        console.log("getData Called")
        setTimeout(() => {
            console.log("Data Fetched")
            this.setState({
                data: "Loading Complete"
            })
        }, 1000)
    }

    componentDidMount(){
        console.log("Component Mounted")
        this.getData()
    }

    render() {
        console.log("render")
        return (
            <div>
                {this.state.data}
                <LifeCyclesCDMChild />
            </div>
           
        )
    }
}

export default LifeCyclesCDM