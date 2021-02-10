import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Button,
  CardText,
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} from "reactstrap";
import sunIcon from "../assets/sunIcon.png";

const baseurl = "http://api.openweathermap.org/data/2.5/weather?lat=";
const connector1 = "&lon=";
const connectorFahrenheit = "&units=imperial&appid=";
const connectorCelcius = "&units=metric&appid=";
const key = "ab1be4aaa1e6745f9fcc41dbcf72d429";

const WeatherChild = () => {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celcius, setCelcius] = useState("");
  const [toggle, setToggle] = useState(false);

  const GetWeatherFahrenheit = () => {
    const lat = "45.5808";
    const lon = "-73.5825";
    const fahrenheitURL = baseurl + lat + connector1 + lon + connectorFahrenheit + key;
    console.log(fahrenheitURL);

    fetch(fahrenheitURL)
      .then((response) => {
        console.log("resolved:", response);
        return response.json();
      })
      .then((data) => {
        setFahrenheit(data.main.temp);
        console.log(fahrenheit);
      })
      .catch((err) => {
        console.log("rejected:", err);
      });

    //   const GetWeatherCelcius = () => {
    //     const lat = "45.5808";
    //     const lon = "-73.5825";
    //     const celciusURL = baseurl + lat + connector1 + lon + connectorCelcius + key;
    //     console.log(celciusURL);
    
    //     fetch(celciusURL)
    //       .then((response) => {
    //         console.log("resolved:", response);
    //         return response.json();
    //       })
    //       .then((data) => {
    //         setCelcius(data.main.temp);
    //         console.log(celcius);
    //       })
    //       .catch((err) => {
    //         console.log("rejected:", err);
    //       });
  };

  return (
    <Card>
      <CardImg src={sunIcon} />
      <CardTitle>Weather</CardTitle>
    {/*<Button>{GetWeatherFahrenheit}</Button>*/}
    </Card>
  );
};

export default WeatherChild;
