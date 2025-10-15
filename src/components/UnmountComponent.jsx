import React from "react";

class UnmountInnerComponent extends React.Component {
    componentWillUnmount() {
        console.log("[3.1] UnmountInnerComponent: Inside Component Will Unmount")
    }
    render() {
        return <div>Inner Component</div>;
    }
}

class UnmountComponent extends React.Component {
    //state = { innerComponent: <UnmountInnerComponent /> };
    constructor(props) {
        super(props);
        this.state = { innerComponent: <UnmountInnerComponent /> };
        console.log("[3] UnmountComponent: Inside the Constractor");
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ innerComponent: <div>Unmounted</div> });
        }, 5000);

        console.log("[3] UnmountComponent: Inside Component Did Mount");
    }

    render() {
        console.log("[3] UnmountComponent: Inside render method");

        return (
            <div>
                { this.state.innerComponent }
            </div>
        );
    }
}

export default UnmountComponent;