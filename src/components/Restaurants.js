import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Card,
  CardColumns,
  CardImg,
  CardTitle,
  Button,
  CardText,
} from "reactstrap";
import IndySkyline from "../components/assets/Indy-skyline.jpg";

const Restaurants = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    if(props.latitude !=0 && props.longitude !=0) {
      const url = `https://developers.zomato.com/api/v2.1/search?count=5&lat=${props.latitude}&lon=${props.longitude}&sort=real_distance&order=asc`;

      fetch(url, {
      method: 'GET',
      headers: new Headers ({
          'Content-Type': 'application/json',
          'user-key': 'a297978138ed2c47e1de3947beadfcbb'
      })
  }) .then((res) => res.json())
      .then((json) => { 
        setRestaurants(json.restaurants);
      });
    }
  }, [props.latitude, props.longitude])
  
  return (
    <Row>
    <Col sm="6">
      <CardImg src={IndySkyline}></CardImg>
      <Card body>
        <CardTitle tag="h5">You like food ehh? Check out these nearby restaurants...</CardTitle>
        <div>
          <ul>
         {restaurants.map(restaurant, index => (<a key = {index} href={restaurant.restaurant.url}><li>{restaurant.restaurant.name}</li></a>))}
          </ul>
        </div>
  
      </Card>
    </Col>
  </Row>
  );
};
export default Restaurants;