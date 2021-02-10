import Satellite from "./components/Satellite";
import React, { useEffect, useState } from "react";
import './App.css';
import {CardDeck, Container, Jumbotron} from 'reactstrap';
import officeSpace from './components/assets/officeSpace.jpg';
import Restaurants from './components/Restaurants'
import WeatherChild from "./components/weather/Weather";




function App() {
    const[longitude, setLongitude] = useState(0);
    const[latitude, setLatitude] = useState(0);

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
       <Restaurants latitude={latitude} longitude={longitude} />
     
        </CardDeck>  
      </div>
  );
}

export default App;
