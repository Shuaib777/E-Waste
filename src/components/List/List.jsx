import React, { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./styles.css";

const List = ({ places }) => {
  const [type, setType] = useState("California");
  return (
    <div>
      <h1>Nearest E-waste Center</h1>
      {/* <form style={{ flexDirection: "row" }}>
        <span style={{ display: "inline" }}>Place</span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          id="places"
        >
          <option value="forza">California</option>
          <option value="forza2">forza2</option>
          <option value="forza3">forza3</option>
          <option value="forza4">forza4</option>
        </select>
      </form> */}
      <div className="list">
        {places?.map((place, i) => (
          <PlaceDetails key={i} place={place}></PlaceDetails>
        ))}
      </div>
    </div>
  );
};

export default List;
