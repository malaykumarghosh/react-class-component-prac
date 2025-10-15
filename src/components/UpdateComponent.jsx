import React from "react";

class UpdateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        console.log("[2] UpdateComponent: Inside the Constractor");
    }

    incrementCounter = () => this.setState({ counter: this.state.counter + 1 });

    shouldComponentUpdate() {
        console.log("[2] UpdateComponent: Inside Should Component Update");
        return true;
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[2] UpdateComponent: Inside Get Snapshot Before Update");

        console.log("[2] UpdateComponent: Previous counter is "+prevState.counter);
        console.log("[2] UpdateComponent: New counter is "+this.state.counter);

        return prevState.counter;
    }

    componentDidUpdate() {
        console.log("[2] UpdateComponent: Inside Component Did Updare");
    }

    render() {
        console.log("[2] UpdateComponent: Inside render method");

        return (
            <div> 
                <button onClick={ this.incrementCounter }>Click Me!</button> 
                &nbsp;&nbsp;Counter: {this.state.counter}
            </div>
        );
    }
}

export default UpdateComponent;