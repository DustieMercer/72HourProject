import React, {useState, useEffect} from 'react';
import {
    Card,
    CardImg,
    Spinner,
    CardTitle,
    CardText,
  } from "reactstrap";

const Satellite = (props) => {
    let key = "api_key=IAKc6eAJsmS3Vv4fVPuGd75NoRMbux6Gk8RBjqE7";
    let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${props.longitude}&lat=${props.latitude}&dim=0.1&date=2020-12-25&${key}`

    const [error, setError] = useState(null);
    const [image, setImage] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (props.latitude !=0 && props.longitude != 0) {
            fetch(url)
                .then((res) => res.blob())
                .then((satBlob) => {
                    setImage(URL.createObjectURL(satBlob));
                })
                .catch((error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }
        setIsLoaded(true)
    }, [props.latitude, props.longitude]);
    
    function loadHandling() {
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (image === "") {
            return <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />;
          } else {
            return (
                <CardImg top width="100%" object-fit="cover" src={image} alt="Card image cap" />
            );
          }
    }

    return (
        <Card>
            {loadHandling()}
        </Card>
    );
}
 
export default Satellite;

// const Satellite = (props) => {
//     const [image, setImage] = useState([]);

//     const fetchImage = () => {
//         if(props.latitude === undefined || props.longitude === undefined){
//             return
//         }
    
//         let key = "api_key=IAKc6eAJsmS3Vv4fVPuGd75NoRMbux6Gk8RBjqE7";
//         let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${props.longitude}&lat=${props.latitude}&date=2020-12-25&${key}`
//         fetch (url)
//         .then(res => {
//             setImage(res.url);
//             console.log(res);
//         })
//     }

//     useEffect(() => {
//         fetchImage();
//     }, []);

// {(props.latitude === undefined || props.longitude === undefined) ? 
//     null
//     : <CardImg top width="100%" object-fit="cover" src={image} alt="Card image cap" /> }