import React, { Component } from "react";
import AnotherChild from "./AnotherChild";

class AnotherParent extends Component {
    state = { message: '' };

    parentFunctionOne = (childData) => {
        this.setState({ message: childData });
    }

    render() {
        return (
            <div>
                <AnotherChild parentCallbackOne={ this.parentFunctionOne } />
                <p>Message from child: { this.state.message }</p>
            </div>
        );
    }

}

export default AnotherParent;