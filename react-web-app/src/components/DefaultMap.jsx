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

var array

fetch('countries_codes_and_coordinates.csv').then(function (response) {
  let reader = response.body.getReader();
  let decoder = new TextDecoder('utf-8');

  return reader.read().then(function (result) {
      const csvString = decoder.decode(result.value);
      array = Papa.parse(csvString)
      console.log(array)
  });
})

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