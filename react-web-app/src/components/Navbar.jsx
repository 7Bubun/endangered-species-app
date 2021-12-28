import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <button onClick={() => this.props.routingFunction("homeview")}>Home</button>
                <button onClick={() => this.props.routingFunction("mapview")}>Map</button>
                <button onClick={() => this.props.routingFunction("imageview")}>Image Classification</button>
                <button onClick={() => this.props.routingFunction("infoview")}>Info</button>
            </div>
        );
    }
}

export default Navbar;
