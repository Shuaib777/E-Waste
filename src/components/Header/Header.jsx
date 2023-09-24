import { Autocomplete } from "@react-google-maps/api";
import "./styles.css";
import React, { useRef, useState } from "react";

const Header = ({ setCoordinates }) => {
  const inputEle = useRef();
  const [autocomplete, setAutocomplete] = useState(null);

  const handleFocus = () => {
    inputEle.current.focus();
  };

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <>
      <div className="header">
        <div className="title">E-waste</div>
        <div className="search">
          <span>Search for E-Waste Center</span>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="inputDiv">
              <span onClick={() => handleFocus()}>🔍</span>
              <input type="text" placeholder="Search..." ref={inputEle} />
            </div>
          </Autocomplete>
        </div>
      </div>
    </>
  );
};

export default Header;
