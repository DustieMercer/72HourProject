import React, { useState, useEffect } from "react";
import {
  Card,
  CardTitle,
  Button,
  CardText,
} from "reactstrap";
import sunIcon from "../assets/sunIcon.png";

const WeatherChild = (props) => {
  const [fahrenheit, setFahrenheit] = useState("");
  const [uom , setUom] = useState('imperial');

  useEffect(() => {
      if (props.latitude != 0 && props.longitude != 0) {
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&units=${uom}&appid=ab1be4aaa1e6745f9fcc41dbcf72d429`
        console.log(url);
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setFahrenheit(data.main.temp);
            console.log(fahrenheit);
          })
          .catch((err) => {
            console.log("rejected:", err);
          });
      }
  
  }, [props.latitude, props.longitude, uom]); //[variable, variable, onChange]

function handleClick (){
  uom === 'imperial' ? setUom ('metric') : setUom('imperial')
}

  return (
    <Card>
      <CardTitle>Weather</CardTitle>
      <CardText>{fahrenheit}</CardText>
      <Button onClick={ handleClick } >Click for Celius/Fahrenheit</Button>
    </Card>
  );
};

export default WeatherChild;
