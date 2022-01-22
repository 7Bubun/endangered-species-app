import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <button className="navbar-button" onClick={() => this.props.routingFunction("homeview")}>
                    Homepage
                </button>
                <a href="map.html"><button className="navbar-button">
                    Map of Endangered Species
                </button></a>
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
