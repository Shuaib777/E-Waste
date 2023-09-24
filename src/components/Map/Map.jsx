import React from "react";
import GoogleMapReact from "google-map-react";
import { LocationOnOutlined } from "@mui/icons-material";

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const handleChange = (e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  };
  return (
    <div className="Map" style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB4SKoFANY5cnHBFwpkB6VH-dF0RbNcloE" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={""}
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
