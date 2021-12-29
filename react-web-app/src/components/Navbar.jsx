import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <button className="navbar-button" onClick={() => this.props.routingFunction("homeview")}>
                    Homepage
                </button>
                <button className="navbar-button" onClick={() => this.props.routingFunction("mapview")}>
                    Endangered species' map
                </button>
                <button className="navbar-button" onClick={() => this.props.routingFunction("imageview")}>
                    Image Classification
                </button>
                <button className="navbar-button" onClick={() => this.props.routingFunction("infoview")}>
                    Information
                </button>
            </div>
        );
    }
}

export default Navbar;
