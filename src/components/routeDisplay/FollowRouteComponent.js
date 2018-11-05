import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/SimpleAction';
import MapContainer from '../map/MapContainer';


export class FollowRouteComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(features);
    this.state = {
      markers: JSON.parse(featuresString),
      markersReference: [],
      visibleMarkers: []
    };
  }

  addMarker = marker => {
    this.setState({
      markersReference: [
        ...this.state.markersReference,
        marker
      ]
    });
  }

  revealMarker() {
    let unrevealedMarkers = this.state.markers;
    let markerToReveal = unrevealedMarkers.pop();
    if (markerToReveal) {
      this.setState({
        markers: unrevealedMarkers,
        visibleMarkers: [
          ...this.state.visibleMarkers,
          markerToReveal
        ]
      });
    }
    console.log(this.state);
  }

  render() {
    console.log("rendering");
    return (
      <div>
        <MapContainer style={{height: '100%'}} markers={this.state.visibleMarkers} addMarker={this.addMarker} />
        <button onClick={() => this.revealMarker()}>Click me</button>
      </div>
    )};
  }

const featuresString = "[{\"id\":1,\"source\":\"http://visit.kaunas.lt/en/to-do/culture-cinema/cultural-venue/zalgirio-arena/\",\"title\":\"Kaunas Žalgirio arena\",\"description\":\"\",\"address\":\"Karaliaus Mindaugo pr. 50, Kaunas\",\"workingHours\":\"\",\"category\":\"CULTURAL VENUE\",\"price\":\"\",\"type\":\"Activity\"},{\"id\":19,\"source\":\"http://visit.kaunas.lt/en/to-do/active-leisure/bowling-billiards/entry/\",\"title\":\"Entry\",\"description\":\"\",\"address\":\"Kęstučio g. 71, Kaunas\",\"workingHours\":\"I - IV 12:00 - 00:00\\nV - VI 12:00 - 02:00\\nVII 12:00 - 00:00\",\"category\":\"BOWLING, BILLIARDS\",\"price\":\"\",\"type\":\"Activity\"},{\"id\":132,\"source\":\"http://visit.kaunas.lt/en/eat-and-drink/restaurants/talluti-tex-mex/\",\"title\":\"TALLUTI Tex Mex\",\"description\":\"\\n\\n                                           \\n\\n\\nRead more\\nLess\\n\\n\",\"address\":\"Laisvės al. 74, Kaunas\",\"workingHours\":\"I - III 11:00 - 23:00\\nV - VI 11:00 - 01:00\\nVII 11:00 - 23:00\\n\",\"category\":\"RESTAURANTS\",\"type\":\"FoodAndBeverage\"},{\"id\":8,\"source\":\"http://visit.kaunas.lt/en/eat-and-drink/bars/republic-no-1/\",\"title\":\"Republic No.1\",\"description\":\"\\n\\nRePUBlic \u0096 English style pub at Kaunas city center.\\n\\n\\nRead more\\nLess\\n\\n\",\"address\":\"Laisvės al.57, Kaunas\",\"workingHours\":\"I - IV - 11:00 - 02:00\\nV - VI - 11:00 - 06:00\\nVII - 12:00 - 02:00\",\"category\":\"BARS\",\"type\":\"FoodAndBeverage\"},{\"id\":17,\"source\":\"http://visit.kaunas.lt/en/accommodation/hotels/kaunas/\",\"title\":\"Kaunas****\",\"description\":\"\\nLocated in the centre of Kaunas, this 4-star hotel is located directly on Laisvės Alėja. It features an indoor pool and air\u0096conditioned rooms with free Wi\u0096Fi and mineral water. Free private parking is available. The rooms of the Hotel Kaunas are spacious and feature a classic interior design. All have a work desk, satellite TV, minibar and refrigerator. Most have a balcony. The Old Town is 800 m from the Kaunas. The Kaunas State Musical Theatre is 450 m away, and the Museum of Zoology is within 300 m.The large fitness centre at the Kaunas features Technogym equipment. A sauna is available for guests to relax in. There is also a safebox, a fax and a conference room. It also offers such services as shoe shine and airport shuttle. Lithuanian and international cuisine is served at the restaurant 55. A coffee bar and 24\u0096hour room service are also available.\\n\",\"address\":\"Laisvės al. 79, Kaunas\",\"workingHours\":\"\",\"category\":\"HOTELS\",\"type\":\"Accommodation\"}]";
  const features = [
    {
      "type": "Point",
      "source": "http://visit.kaunas.lt/e…ink/pizzerias/cili-pica/",
      "coordinates": "Savanorių pr. 346, Kaunas",
      "description": "\n\nOther \u0084Čili pic…\n\nRead more\nLess\n\n",
      "title": "ČILI PICA",
      "mapOn": true
    }, {
      "type": "Point",
      "coordinates": [42.879145, -122.037881],
      "description": "Flush toilet",
      "title": "Lost Creek",
      "mapOn": true
    }, {
      "type": "Point",
      "address": "Savanorių pr. 346, Kaunas",
      "description": "Vault toilet",
      "title": "Huckleberry Mountain",
      "mapOn": true
    }, {
      "type": "Point",
      "coordinates": [42.889648, -122.463867],
      "description": "Vault toilet",
      "title": "Natural Bridge -USFS",
      "mapOn": true
    }, {
      "type": "Point",
      "coordinates": [42.884588, -121.924772],
      "description": "Vault toilet",
      "title": "Scott Creek",
      "mapOn": true
    }, {
      "type": "Point",
      "address": "Taikos pr. 67, Kaunas",
      "description": "Vault toilet",
      "title": "Union Creek",
      "mapOn": true
    }, {
      "type": "Point",
      "coordinates": [42.9162388889, -122.4353305556],
      "description": "",
      "title": "Farewell Bend Campground",
      "mapOn": true
    }
  ];
