import React from 'react';

export class Marker extends React.Component {

  componentDidMount() {
    this.renderMarker();
  }

  renderMarker() {
    let {
      map, google, title
    } = this.props;

    // if the marker has already been drawn, set map on or null
    if (this.marker) {
      if (!this.props.mapOn) {
        this.marker.setMap(null);
      }
      else {
        this.marker.setMap(map)
      }
      return
    }

    // let lat = this.props.position[0]
    // let long = this.props.position[1]
    let geocoder;

    if (typeof this.props.position === "string") {
      geocoder = new google.maps.Geocoder();
      this.placeMarkerByAddress(geocoder, this.props.position, {map, title}, google.maps);
      // position = this.encodeAddress(geocoder, this.props.position);
  } else {
    let position = new google.maps.LatLng(...this.props.position);


    // if marker does not have mapOn, set visibility to none via
    // setting the map to null
    const pref = {
        map: map,
        position: position,
        title:title
      };

    this.marker = new google.maps.Marker(pref);
    map.setZoom(15);
    map.panTo(this.marker.position);
    // this.marker.addListener('click', (e) => {
      // this.props.onMarkerClick(this.marker)
    // })

    this.props.addMarker(this.marker)
  }
}

  placeMarkerByAddress(geocoder, address, options, gmap) {
    geocoder.geocode({address}, (result, status) => {
      if (status === "OK") {
        this.marker = new gmap.Marker({
          ...options,
          position: result[0].geometry.location
        });
        options.map.setZoom(15);
        options.map.panTo(this.marker.position);
        this.props.addMarker(this.marker);
      } else {
        console.log("Encoding failed");
      }
    });
  }


  render() {
    return null;
  }
}
