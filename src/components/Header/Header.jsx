import { Autocomplete } from "@react-google-maps/api";
import "./styles.css";
import React, { useRef } from "react";

const Header = () => {
  const inputEle = useRef();

  const handleFocus = () => {
    inputEle.current.focus();
  };
  return (
    <>
      <div className="header">
        <div className="title">Travel advisor</div>
        <div className="search">
          <span>Explore new Places</span>
          <div className="inputDiv">
            <span onClick={() => handleFocus()}>🔍</span>
            <input type="text" placeholder="Search..." ref={inputEle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
