import React, { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import TabBarMenu from "./components/tabBarMenu/TabBarMenu";
import MetricSlider from "./components/metricSlider/MetricSlider";
import "./App.css";
import axios from "axios";

const apiKey = "0ac4c9dcc5a66ea3d2a9fe36e3bb7761";

function App() {
  const [weatherData, setWeatherData] = useState(null); // initial state: null
  const [location, setLocation] = useState("utrecht");

  async function handleClick() {
    console.log("FETCH WEATHER NAO!");
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`
    );

    // 1. local scope -> global
    // 2. we niet allen opslaan, maar ook weergeven -> rerender!
    // console.log("RES:", response.data.weather);
    setWeatherData(response.data);
  }

  console.log("LOCATION IN APP:", location);
  // console.log("WEATHER:", weatherData);
  // 1. null (begin state)
  // 2. het weer

  return (
    <>
      <div className="weather-container">
        {/*HEADER -------------------- */}
        <div className="weather-header">
          {/* passing props down (name: setLocationHandler, value: setLocation) */}
          <SearchBar setLocationHandler={setLocation} />

          <span className="location-details">
            {weatherData && (
              <>
                <h2>{weatherData.weather[0].description}</h2>
                <h3>{weatherData.name}</h3>
                <h1>{weatherData.main.temp}</h1>
              </>
            )}
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
