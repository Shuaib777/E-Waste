import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { Backdrop, CircularProgress } from "@mui/material";
import "./App.css";
import { getPlaces } from "./api/index";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlaces(bounds.ne, bounds.sw).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline>
        <Header setCoordinates={setCoordinates}></Header>
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            {isLoading && (
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
            <List places={places}></List>
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              places={places}
            ></Map>
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default App;
