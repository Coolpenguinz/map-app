import React from 'react';
import './styles/App.css';
import Map from './components/Map';
import HouseForm from './components/HouseForm';
import {LocationList, Pin} from './types';


 
interface IAppState {
    PinList: LocationList
}

interface IAppProps {
  PinList: LocationList
}

class App extends React.Component<IAppState> {

  state: IAppState;

  constructor(props: IAppProps) {
    super(props);
    this.state = {PinList: props.PinList}
    this.AddPin = this.AddPin.bind(this);
  };

  AddPin(house: Pin) {
    this.setState({
      PinList: [...this.state.PinList, house]
  })
  }

  render() {
    return (
      <div className="App">
          <HouseForm Pins={this.state.PinList} onPinChange={this.AddPin} PinsLength={this.state.PinList.length}></HouseForm>
          <Map Pins={this.state.PinList} location={this.state.PinList[0]} zoomLevel={12}></Map>
      </div>
    );
  }
}
 
export default App;
 
