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
                    Map of Endangered Species
                </button>
                <button className="navbar-button" onClick={() => this.props.routingFunction("imageview")}>
                    Species Classification
                </button>
                <button className="navbar-button" onClick={() => this.props.routingFunction("infoview")}>
                    Encyclopedia
                </button>
            </div>
        );
    }
}

export default Navbar;
