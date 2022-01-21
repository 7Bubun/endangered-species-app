import React, { Component } from 'react'
import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'
import Papa from 'papaparse'

const option = {
  authOptions: {
      authType: AuthenticationType.subscriptionKey,
      subscriptionKey: ""
  },
}

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