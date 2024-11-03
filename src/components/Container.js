// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// class MapContainer extends Component {
//   render() {
//     const mapStyles = {
//       width: '50%',
//       height: '50%',
//     };

//     const initialCenter = {
//       lat: 40.0002,
//       lng: 10.000,
//     };

//     return (
//       <Map
//         google={this.props.google}
//         style={mapStyles}
//         zoom={10}
//         initialCenter={initialCenter}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAmo9fmYXIaYxZIwfsbMRc-j_txBRHLV-c',
// })(MapContainer);




// src/MyComponent.js

import React from 'react';
import"../css/container.css"
function MyComponent() {
  return (
    <div className='mapdiv'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799145721!2d-74.25986468755457!3d40.69767006379625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b262928e07%3A0x176f80ad1f1e5c0!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1730200000000"
        width="70%" // Set an appropriate width (e.g., 100%)
        height="75%" // Set an appropriate height (e.g., 400px)
        style={{ border: 0 }} // Remove the default border
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      
    </div>
  );
}

export default MyComponent;

// 
// https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30492.360702701342!2d78.6087264379607!3d17.192326457948667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba7878e3ba5ef%3A0xfca47c737d862040!2sIbrahimpatnam%2C%20Telangana%20501506!5e0!3m2!1sen!2sin
// 
// https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15241.187188923419!2d-74.005974!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba14a224b1e23%3A0x4515d7685e43bd0c!2sNew+York+City!5e0!3m2!1sen!2sin!4v1730008063340!5m2!1sen!2sin
// 