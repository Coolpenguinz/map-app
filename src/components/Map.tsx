import React from "react";
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import {LocationList} from '../types';
import '../styles/Map.css';
import {apiKey} from '../data/apiKey';
 
type IProps  = {
  location: {name: string, lat: number, lng: number};
  zoomLevel: number;
  Pins: LocationList;
}


 
class Map extends React.Component<IProps> {
  render() {
    const PinList = this.props.Pins;
    const getMapOptions = (maps: any) => {
      return {
        disableDefaultUI: true,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
      };
    };
    return (
      <div className="map">
        <h2 className="map-h2">Grouphouse Map</h2>
   
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={this.props.location}
            defaultZoom={this.props.zoomLevel}
            options={getMapOptions}
          >
          {
            PinList.map((Pin, i) => (
              <LocationPin
              key={i}
              lat={Pin.lat}
              lng={Pin.lng}
              text={Pin.name}
            />
            ))
          }
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}
 
export default Map
