import React from "react"


class EventBinding extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick(){
        this.setState({
            introduction: "Goodbye",
            buttonText: "C u soon"
        })
        console.log("Button clicked!")
    }

    render() {
        return (
            <div>
               <h1> {this.state.introduction} {this.props.greeting}</h1>
               <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}


export default EventBinding