import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


class App extends React.Component {
    render() {
        return (
            <LoadScript
                googleMapsApiKey = "AIzaSyDoeXTFrYynPhkkL6tkHsBQqkXal9IVBgs"
            >
                <GoogleMap
                    mapContainerStyle = {{width:'500px', height:'500px'}}
                    center = {{lat: 18.520430 , lng: 73.856743}}
                    zoom = {10}
                >
                <Marker 
                    position = {{lat: 18.486811, lng: 73.855942 }}
                />
                </GoogleMap>
            </LoadScript>
        );
    }
}

export default App;