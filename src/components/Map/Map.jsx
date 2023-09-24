import React from "react";
import GoogleMapReact from "google-map-react";
import { LocationOnOutlined } from "@mui/icons-material";
import mapStyles from "./mapStyles";

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const handleChange = (e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  };
  return (
    <div
      className="Map"
      style={{
        margin: "10px",
        height: "85vh",
        width: "100%",
        border: "1px solid black",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_kEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => handleChange(e)}
        onChildClick={""}
      >
        {places?.map((place) => (
          <div lat={Number(place.latitude)} lng={Number(place.longitude)}>
            <LocationOnOutlined
              color="primary"
              fontSize="large"
            ></LocationOnOutlined>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
