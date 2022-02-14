import React from "react";
import  { GoogleMap, Marker } from "react-google-maps/api";


const getCurrentAddress = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showCurrent, showError);
  } else {
    alert("There are no geolocation in this browser.");
  }
}

const showError = () => {
  if (navigator.permissions) {
    navigator.permissions.query({ name: "geolocation" })
      .then(result => { if (result.state === 'denied') {
        alert("Make location permissions for this website in your browser settings.")
      }
    })
  } else {
    alert("This website can not access your location. You can access by submitting your location")
    }
  }

const showCurrentAddress = (current) => {
  let lat = position.coords.latitude
  let long = position.coords.longitude
  props.set_lat(lat)
  
}






const Map = (props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>




// const Map = () => {
//   const mapElement = useRef()
//   const [map, setMap] = useState({})
//   const [longitude, setLongitude] = useState(-79.40701695358305)
//   const [latitude, setLatitude] = useState(43.76391085)

//   useEffect(() => {
//     let map = 
//   }, [])

//   return <div ref={mapElement} id="map" />;
// }

export default Map;