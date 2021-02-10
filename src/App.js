import Satellite from "./components/Satellite";
import React, { useEffect, useState } from "react";
import './App.css';
import {CardDeck, Container, Jumbotron} from 'reactstrap';
import officeSpace2 from './components/assets/officeSpace2.jpg';
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
      <div style={{background: 'linear-gradient(0deg, rgba(141,57,47,1) 0%, rgba(37,25,29,1) 100%)'}}>
        <div className='container'>
      <Jumbotron fluid>
        <Container background-img={officeSpace2} fluid>
          <h1 className="display-3">Team Office Space</h1>
          <h2 className="lead">72 Hour Project</h2>
        </Container>
      </Jumbotron>
      </div>
        <CardDeck>
         <WeatherChild latitude={latitude} longitude={longitude}/>
          <Satellite latitude={latitude} longitude={longitude}/>
          <Restaurants latitude={latitude} longitude={longitude} />
        </CardDeck> 
        <footer style={{color: "white", marginTop: "12em", paddingBottom: "1em"}}> &copy; 2021 Team Office Space</footer>
      </div>
  );
}

export default App;
