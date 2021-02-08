import React from 'react';

const Satellite = (props) => {

    return (
        <div>
            <p>{props.latitude}</p>
            <p>{props.longitude}</p>
        </div>

    );
}
 
export default Satellite;