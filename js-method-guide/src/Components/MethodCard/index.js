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
     
        let method_class = this.state.active ? "method-card-active" : "method-card";
        let close_class = this.state.active? "close-button" : "hide-close-button";
        return(
            <div className={method_class} key={this.props.method.id} onClick={this.active_click}>
                <div className="card-icon">{this.props.method.dataType.slice(0,1).toUpperCase()}</div>
                <div className={close_class} onClick={this.close_button}>X</div>
                <h2>{this.props.method.name}</h2>
                <div className="divider"></div>
                <p>{this.props.method.description}</p>

            </div>
        )
    }
}

export default MethodCard;
