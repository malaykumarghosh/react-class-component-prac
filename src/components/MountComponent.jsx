import React from "react";

class MountComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("[1] MountComponent: Inside the Constractor");
    }

    componentDidMount = () => {
        console.log("[1] MountComponent: Inside Component Did Mount");
    }

    render() {
        console.log("[1] MountComponent: Inside render method");

        return (
            <div> The component is rendered. Please check console log also. </div>
        );
    }
}

export default MountComponent;