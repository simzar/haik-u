import React from 'react';
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'
import Map from './Map'
import {Marker} from './Marker'
import {InfoWindow} from './InfoWindow'

require("./mapContainerStyles.css");

export class MapContainer extends React.Component {
  render() {
    console.log("rendering map container", this.props.markers);
    return (
      <div className="map-container" style={style}>
        <Map google={this.props.google}>
          {this.props.markers.map(marker =>
            <Marker
              key={marker.title}
              title={marker.title}
              description={marker.description}
              position={marker.coordinates || marker.address}
              addMarker={this.props.addMarker}
              onMarkerClick={this.props.onMarkerClick}/>
          )}
          <InfoWindow {...this.props}
            marker={this.props.activeMarker}
            visible={this.props.showingInfoWindow}>
            <div>
              <h4>{this.props.selectedTitle}</h4>
            </div>
          </InfoWindow>
        </Map>

      </div>
    )}
  }

  const style = {
    width: '90%',
    height: '100%',
    marginLeft: '5%',
    marginRight: '5%'
  }

  let key = config.getGoogleKey()
  export default GoogleApiComponent({
    apiKey: key
  })(MapContainer)
