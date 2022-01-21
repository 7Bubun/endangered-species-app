import React, { Component } from 'react'
import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'
import Papa from 'papaparse'
import { key } from "./key";

const option = {
  authOptions: {
      authType: AuthenticationType.subscriptionKey,
      subscriptionKey: key
  },
}

Papa.parse("countries_codes_and_coordinates.csv", {
  complete: function(results) {
    console.log("Finished:", results.data);
  }}
)

class DefaultMap extends Component {
  render() {
    return(
      <div style={{height: '600px'}}>
          <AzureMapsProvider>
              <AzureMap options={option}>
              </AzureMap>
          </AzureMapsProvider>
      </div>
    )
  }
}

export default DefaultMap;