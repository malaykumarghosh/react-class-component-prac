import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    state = { childColor: 'green', childName: 'John' }

    changeColor = () => {
        const newColor = document.getElementById("colorbox").value;
        this.setState({ childColor: newColor });
    }

    changeName = () => {
        const newName = document.getElementById("namebox").value;
        this.setState({ childName: newName })
    }

    render() {
        console.log("Inside Parent Component Render Method");
        return (
            <div>
                Color <input type="text" onChange={ this.changeColor } id="colorbox" /> <br/>
                Name <input type="text" onChange={ this.changeName } id="namebox" /> <br/>
                <ChildComponent color={ this.state.childColor } name={ this.state.childName } />
            </div>
        );
    }
}

export default ParentComponent;
