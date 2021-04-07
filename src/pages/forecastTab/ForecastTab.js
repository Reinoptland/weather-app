import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ForecastTab.css";
import { apiKey } from "../../App";

function createDateString(timestamp) {
  const day = new Date(timestamp * 1000);

  return day.toLocaleDateString("nl-NL", { weekday: "long" });
}

function ForecastTab(props) {
  const [forecasts, setForecasts] = useState(null);
  console.log("PROPS IN FORECAST:", props.coordinates);

  useEffect(() => {
    console.log("EFFECT IN FORECAST!");
    async function getData() {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=minutely,current,hourly&appid=${apiKey}&lang=nl`
      );

      // console.log("WHAT IS RESPONSE?", response);
      setForecasts(response.data.daily);
    }

    if (props.coordinates) {
      getData();
    }

    // props.coordinates && getData();
  }, [props.coordinates]);

  console.log("FORECASTS:", forecasts);

  return (
    <div className="tab-wrapper">
      {forecasts &&
        forecasts.slice(0, 5).map((forecast) => {
          console.log("FORECASTS??", forecast);
          return (
            <article key={forecast.dt} className="forecast-day">
              <p className="day-description">{createDateString(forecast.dt)}</p>

              <section className="forecast-weather">
                <span>{forecast.temp.day}</span>
                <span className="weather-description">
                  {forecast.weather[0].description}
                </span>
              </section>
            </article>
          );
        })}
      {/* <article className="forecast-day">
        <p className="day-description">Maandag</p>

        <section className="forecast-weather">
          <span>12&deg; C</span>
          <span className="weather-description">Licht Bewolkt</span>
        </section>
      </article> */}
    </div>
  );
}

export default ForecastTab;
