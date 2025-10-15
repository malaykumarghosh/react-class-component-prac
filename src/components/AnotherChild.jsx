import React, {Component} from "react";

class AnotherChild extends Component {
    // constructor(props) {
    //    super(props);
    // }

    sendData = () => {
        setInterval( () => { 
            const currTime = Date();
            this.props.parentCallbackOne(currTime);
        }, 1000);
    }

    componentDidMount() {
        this.sendData();
    }

    render() {
        return  <div></div>;
    }
}

export default AnotherChild;
    