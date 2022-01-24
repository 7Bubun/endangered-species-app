import React, { useContext, useEffect, useState } from 'react';
import { AzureMapsContext } from 'react-azure-maps';
import { data, layer, source } from 'azure-maps-control';
import DefaultMap from './DefaultMap';

const dataSourceRef = new source.DataSource();
const layerRef = new layer.SymbolLayer(dataSourceRef);

const MapController = () => {
  // Here you use mapRef from context
  const { mapRef, isMapReady } = useContext(AzureMapsContext);
  const [showTileBoundaries, setShowTileBoundaries] = useState(true);
  
  const changeMapCenter = () => {
    if (mapRef) {
      // Simple Camera options modification
      mapRef.setCamera({ center: getRandomPosition() });
      console.log(mapRef)
    }
  };
  
  useEffect(() => {
    if (mapRef) {
      // Simple Style modification
      mapRef.setStyle({ showTileBoundaries: !showTileBoundaries });
    }
  }, [showTileBoundaries]);
  
  const toggleTitleBoundaries = () => {
    setShowTileBoundaries((prev) => !prev);
  };


  useEffect(() => {
    if (isMapReady && mapRef) {
      // Need to add source and layer to map on init and ready
      mapRef.sources.add(dataSourceRef);
      mapRef.layers.add(layerRef);
    }
  }, [isMapReady]);

  // Util function to add pin
  const addRandomMarker = () => {
    const randomLongitude = Math.floor(Math.random() * (180 - -180) + -180);
    const randomLatitude = Math.floor(Math.random() * (-90 - 90) + 90);
    const newPoint = new data.Position(randomLongitude, randomLatitude);

    dataSourceRef.add(new data.Feature(new data.Point(newPoint)));
    console.log("Method called");
  };

    // var marker = new atlas.HtmlMarker({
    //     color: 'DodgerBlue',
    //     text: '10',
    //     position: [0, 0],
    //     popup: new atlas.Popup({
    //         content: '<div style="padding:10px">Hello World</div>',
    //         pixelOffset: [0, -30]
    //     })
    // });

    // mapRef.markers.add(marker);



  return (
    <>
      <div>Map Controller</div>
      <button onClick={() => changeMapCenter()}>
                    Do something
                </button>
      <DefaultMap />
    </>
  );
};

// Util Function to generate random position
const getRandomPosition = () => {
  const randomLongitude = Math.floor(Math.random() * (180 - -180) + -180);
  const randomLatitude = Math.floor(Math.random() * (-90 - 90) + 90);
  return [randomLatitude, randomLongitude];
};

// Some styles
const styles = {
  buttonContainer: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridGap: '10px',
    gridAutoColumns: 'max-content',
    padding: '10px 0',
    alignItems: 'center',
  },
  button: {
    height: 35,
    width: 80,
    backgroundColor: '#68aba3',
  },
};

export default MapController;
