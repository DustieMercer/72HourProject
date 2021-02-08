import React, { useEffect, useState } from "react";
import { CardColumns } from "reactstrap";

const Restaurants = () => {
  const [restaurant, setRestaurants] = useState([]);
  function fetchRestaurants() {
    const url = "https://developers.zomato.com/api/v2.1/search?q=mexican&lat=39.694564799999995&lon=86.01008399999999&sort=rating&order=asc";
    fetch(url, {
      method: 'GET',
      headers: new Headers ({
          'Content-Type': 'application/json',
          'user-key': '086f4acd1c802fc5c003088ca3060580'
      })
  }) .then((res) => res.json())
      .then((json) => {
        setRestaurants(json.results);
        console.log(JSON.stringify(json));
      });
  } 


  useEffect(() => {
    fetchRestaurants();
}, []);

  /*function displayCards() {
    return characters.length > 0
      ? characters.map((character) => <MortyChild mortyCharacter = {character} />)
      : null;
  }*/
  return (
    <div>
      <button onClick={fetchRestaurants()}>Search Catergory</button>

      {/*<CardColumns>{displayCards()}</CardColumns>*/}
    </div>
  );
};





export default Restaurants;