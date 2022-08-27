import React from 'react';
import './styles/App.css';
import Map from './components/Map';
import HouseForm from './components/HouseForm';

const location = {
  address: 'Casa Bonita',
  lat: 37.88441098804093, 
  lng: -122.2730712395573
}


function App() {
  return (
    <div className="App">
          <HouseForm></HouseForm>
          <Map location={location} zoomLevel={17}></Map>
    </div>
  );
}

export default App;
