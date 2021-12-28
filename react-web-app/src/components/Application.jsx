import React, { Component } from "react";
import Content from "./Content";
import Navbar from "./Navbar";

class Application extends Component {
    state = { nameOfCurrentView: "homeview" };

    render() {
        return (
            <React.Fragment>
                <Navbar routingFunction={view => this.setState({ nameOfCurrentView: view })} />
                <Content nameOfView={this.state.nameOfCurrentView} />
            </React.Fragment>
        );
    }
}

export default Application;
