import React, { Component } from 'react'
import importedNames from "../names"

export class Searchbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            names: importedNames,
        }

    }

    handleChange = (event) => {
        console.log("handleChange")
        const inputText = event.target.value.toLowerCase()
        console.log(inputText)
        const filteredNames = importedNames.filter(name => {
           return name.toLowerCase().includes(inputText)
        })
        console.log(filteredNames)
        this.setState({
            names: filteredNames
        })
    }
    render() {
        return (
            <div>
                <h1>Name search:</h1>
                <p>Matching names found: {this.state.names.length}</p>
                <input
                    type="text"
                    placeholder="Search Names"
                    onChange={(event) => this.handleChange(event)}
                />
                <div style={{ margin: "auto" }}>

                    {
                        this.state.names.map(name => {
                            return <p key={name}>{name}</p>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Searchbar