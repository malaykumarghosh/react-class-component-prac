import React, {Component} from "react";

class ChildComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const txtStyle = { color: this.props.color };
        return <span style={ txtStyle }>{ this.props.name }</span>;
    }
}

export default ChildComponent;
