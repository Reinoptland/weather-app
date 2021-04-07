import React from "react";
import SearchBar from "./components/searchBar/SearchBar";
import TabBarMenu from "./components/tabBarMenu/TabBarMenu";
import MetricSlider from "./components/metricSlider/MetricSlider";
import "./App.css";

const apiKey = "0ac4c9dcc5a66ea3d2a9fe36e3bb7761";

function App() {
  function handleClick() {
    console.log("FETCH WEATHER NAO!");
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
