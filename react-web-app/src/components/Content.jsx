import React, { Component } from "react";
import HomeView from "./HomeView";
import MapView from "./MapView";
import ImageView from "./ImageView";
import InfoView from "./InfoView";

class Content extends Component {
    render() {
        return <div>{this.selectView()}</div>;
    }

    selectView() {
        switch (this.props.nameOfView) {
            case "homeview":
                return <HomeView />
            case "mapview":
                return <MapView />
            case "imageview":
                return <ImageView />
            case "infoview":
                return <InfoView />
            default:
                return <h1> ERROR </h1>
        }
    }
}

export default Content;
