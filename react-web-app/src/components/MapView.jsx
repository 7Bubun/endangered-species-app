import React, { Component } from "react";
import MapController from './MapController.jsx';
import { AzureMapsProvider } from 'react-azure-maps';

class MapView extends Component {
    render() {
        return (
            <AzureMapsProvider>
                <h4>mapka</h4>
                <MapController />
            </AzureMapsProvider>
        );
    }
}

export default MapView;
