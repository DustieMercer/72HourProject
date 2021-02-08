import React from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
  } from "reactstrap";

const Satellite = (props) => {
    const fetchImage = () => {
        let key = "api_key=IAKc6eAJsmS3Vv4fVPuGd75NoRMbux6Gk8RBjqE7";
        let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${props.longitude}&lat=${props.latitude}&${key}`;
        fetch (url)
        .then(res => res)
    }

    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <Card>
            <CardImg top width="100%" src={res} alt="Card image cap" />
        </Card>

    );
}
 
export default Satellite;