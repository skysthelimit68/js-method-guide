import React from 'react';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null,
            goal: null
        }
    }

    selectType = type => {
        this.setState({
            type : this.state.type != type ? type : null
        })
    }

    render() {
        return (
            <div className="nav-wrap">
                <h3>JavaScript Method Finder</h3>
                <ul>
                    <li onClick={() => this.selectType("Array")}>Array</li>
                        <ul className={this.state.type == "Array"? "": "hide"}>
                            <li>Join</li>
                            <li>Check</li>
                            <li>Find</li>
                            <li>Change</li>
                        </ul>
                    <li onClick = {() => this.selectType("String")}>String</li>
                        <ul className={this.state.type == "String" ? "" : "hide"}>
                            <li>Join</li>
                            <li>Check</li>
                            <li>Find</li>
                            <li>Change</li>
                        </ul>
                    <li onClick = {() => this.selectType("Other")}>Other</li>
                        <ul className={this.state.type == "Other" ? "" : "hide"}>
                            <li>Join</li>
                            <li>Check</li>
                            <li>Find</li>
                            <li>Change</li>
                        </ul>   
                </ul>

            </div>
        )
    }
}

export default Navigation;