import React from 'react';

class MethodCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false
        }
    }

    active_click = e => {
        e.stopPropagation();
        this.setState({
            active : true
        })
    }

    close_button = e => {
        e.stopPropagation();
        this.setState({
            active : false
        })
    }

    render() {

        return(
            <div className={this.state.active ? "method-card-active" : "method-card"} key={this.props.method.id} onClick={this.active_click}>
                <div className={this.state.active ? "hide" : "card-icon"}>{this.props.method.dataType.slice(0,1).toUpperCase()}</div>
                <div className={this.state.active? "close-button" : "hide"} onClick={this.close_button}>X</div>
                <h2>{this.props.method.name}</h2>
                <div className="divider"></div>
                <p>{this.props.method.description}</p>

            </div>
        )
    }
}

export default MethodCard;
