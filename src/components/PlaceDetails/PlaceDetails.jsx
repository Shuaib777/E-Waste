import React from "react";
import eWasteImage from "../../image/eWasteImage.jpg";
import "./styles.css";

const PlaceDetails = ({ place, setCoordinates }) => {
  const handleClick = () => {
    setCoordinates({ lat: place.latitude, lng: place.longitude });
  };
  return (
    <div className="container">
      <div className="imgDiv" onClick={() => handleClick()}>
        <img src={eWasteImage} alt="" />
      </div>
      <div>
        <div>
          <p>{place.name}</p>
          <p>{place.contact}</p>
          <a href={place.website} target="blank">
            <p>{place.website}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
