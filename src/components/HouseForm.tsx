import React from "react";
import {LocationList, Pin} from '../types';
// import {v4 as uuidv4} from 'uuid';

interface IProps {
    Pins: LocationList;
    onPinChange(house: Pin): void;
    PinsLength: number;
}


interface IState{
    PinList: LocationList,
    HouseName: string,
    HouseLat: number,
    HouseLng: number
}
 
type InputEvent = React.ChangeEvent<HTMLInputElement>;
 
class HouseForm extends React.Component<IProps, IState> {

    state: IState;

    constructor(props: IProps) {
        super(props);
        this.state = {PinList: props.Pins,
                      HouseName: '',
                      HouseLat: 0,
                      HouseLng: 0,
                      };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLatChange = this.handleLatChange.bind(this);
        this.handleLngChange = this.handleLngChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleNameChange(event: InputEvent): void {
        const target = event.currentTarget as HTMLInputElement;
        this.setState({HouseName: target.value})
    }
    handleLatChange(event: InputEvent): void {
        const target = event.currentTarget as HTMLInputElement;
        this.setState({HouseLat: +target.value})
    }
    handleLngChange(event: InputEvent): void {
        const target = event.currentTarget as HTMLInputElement;
        this.setState({HouseLng: +target.value})
    }
 
    handleSubmit(event: React.FormEvent) {
        var house = {id: this.props.PinsLength, name: this.state.HouseName, lat: this.state.HouseLat, lng: this.state.HouseLng}
        console.log(house);
        this.props.onPinChange(house)
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    House Name: 
                    <input type = "text" name="name" defaultValue="Name" onChange={this.handleNameChange}></input>
                    Latitude: 
                    <input type = "text" name="lat" defaultValue="Latitude"  onChange={this.handleLatChange}></input>
                    Longitude: 
                    <input type = "text" name="lng" defaultValue="Longitude" onChange={this.handleLngChange}></input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}
 
export default HouseForm
