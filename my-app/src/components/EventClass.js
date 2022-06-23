import React, { cloneElement, Component } from 'react'

export class EventClass extends Component {
    clickHandler() {
        console.log("Clicked the ClassComponent!")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me - Class Component</button>
            </div>
        )
    }
}

export default EventClass