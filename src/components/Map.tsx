import React from "react";
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import '../styles/Map.css'

type IMap  = {
  location: {address: string, lat: number, lng: number};
  zoomLevel: number;
}

class Map extends React.Component<IMap> {
  constructor(props: IMap) {
    super(props)
  }
  render() {
    const getMapOptions = (maps: any) => {
      return {
        disableDefaultUI: true,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
      };
    };
    const {location, zoomLevel} = this.props;
    return (
      <div className="map">
        <h2 className="map-h2">Grouphouse Map</h2>
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBRZiM_wRLQI5RgWvPY1SrLIniwl1c-uho' }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
            options={getMapOptions}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default Map