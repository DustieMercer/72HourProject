import React, { useEffect, useState } from 'react';

function App() {
  // const[longitude, setLongitude] = useState(longitude)
  // const[latitude, setLatitude] = useState(latitude)



useEffect(() => {
  navigator.geolocation.getCurrentPosition(showPosition);
},[]);


function showPosition(position){
  console.log(`latitude: ${position.coords.latitude} and longitude ${position.coords.longitude}`)
}


  return (
<div>

</div>

  );
}

export default App;
