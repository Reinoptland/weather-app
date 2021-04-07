import React from "react";
import SearchBar from "./components/searchBar/SearchBar";
import TabBarMenu from "./components/tabBarMenu/TabBarMenu";
import MetricSlider from "./components/metricSlider/MetricSlider";
import "./App.css";
import axios from "axios";

const apiKey = "0ac4c9dcc5a66ea3d2a9fe36e3bb7761";

function App() {
  async function handleClick() {
    console.log("FETCH WEATHER NAO!");
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=utrecht,nl&appid=${apiKey}&lang=nl`
    );

    console.log("RES:", response);
  }

  return (
    <>
      <div className="weather-container">
        {/*HEADER -------------------- */}
        <div className="weather-header">
          <SearchBar />

          <span className="location-details">
            <h2>Bewolkt</h2>
            <h3> </h3>
            <h1>14 &deg;</h1>

            <button type="button" onClick={handleClick}>
              Haal data op!
            </button>
          </span>
        </div>

        {/*CONTENT ------------------ */}
        <div className="weather-content">
          <TabBarMenu />

          <div className="tab-wrapper">
            Alle inhoud van de tabbladen komt hier!
          </div>
        </div>

        <MetricSlider />
      </div>
    </>
  );
}

export default App;
