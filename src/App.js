/*import React, { useEffect, useState } from 'react';*/

import React, { useEffect, useState } from 'react';
import Satellite from "./components/Satellite";
import Restaurants from './components/Restaurants'

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
        <Satellite latitude={latitude} longitude={longitude}/>
        <Restaurants latitude={latitude} longitude={longitude} />
      </div>
  );
}

export default App;





