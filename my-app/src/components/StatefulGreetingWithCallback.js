import React from "react"


class StatefulGreetingWithCallback extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            counter: 0,
        };
    }

    increment(){
        this.setState((prevState, prevProps) => {
            console.log("prevProps", prevProps)
            console.log("PrevState", prevState)
            return {
                counter: prevState.counter + 1
            }
        })
    }

    incrementTen(){
        this.setState({
            counter: this.state.counter + 10,
        })
    }

    handleClick(){
        this.setState({
            introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
            
        }, () => {
            console.log("New state:", this.state.introduction)
            console.log("New state:", this.state.buttonText)
        });
        
    }

    render() {
        return (
            <div>
               <h1> {this.state.introduction} {this.props.greeting}</h1>
               <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
               <h3>{this.state.counter}</h3>
               <button onClick={() => this.increment()}>increment by 1</button>
               <button onClick={() => this.incrementTen()}>increment by 10</button>
            </div>
        )
    }
}


export default StatefulGreetingWithCallback