import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
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
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
