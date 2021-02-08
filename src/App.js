import Satellite from "./components/Satellite";
import React, { useEffect, useState } from "react";
import './App.css';
import WeatherChild from "./components/weather/Weather";
import {CardDeck, Container, Jumbotron} from 'reactstrap';
import officeSpace from './components/assets/officeSpace.jpg';

function App() {
    const[longitude, setLongitude] = useState()
    const[latitude, setLatitude] = useState()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(showPosition);
    },[]);

    function showPosition(position){
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }

    return (
      <div>
        <div className='container'>
      <Jumbotron fluid>
        <Container background-img={officeSpace} fluid>
          <h1 className="display-3">Office Space</h1>
          <h2 className="lead">72 Hour Project</h2>
        </Container>
      </Jumbotron>
      </div>
        <CardDeck>
          <WeatherChild latitude={latitude} longitude={longitude}/>
          <Satellite latitude={latitude} longitude={longitude}/>
      
        </CardDeck>  
      </div>
  );
}

export default App;

// const Satellite2 = (props) => {

//   return (
//       <div>{props.latitude}</div>
//   );
// }

