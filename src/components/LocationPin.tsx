import React from "react";
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import '../styles/LocationPin.css'

type ILocationPin  = {
  text: string;
  lat: number;
  lng: number;
}

class LocationPin extends React.Component<ILocationPin> { 
  render() {
    const text = this.props.text;
    return(
      <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
      </div>
    )
  } 
}

export default LocationPin