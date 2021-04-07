import React, { useEffect } from "react";
import axios from "axios";
import "./ForecastTab.css";

function ForecastTab(props) {
  console.log("PROPS IN FORECAST:", props.coordinates);

  useEffect(() => {
    console.log("EFFECT IN FORECAST!");
  }, [props.coordinates]);

  return (
    <div className="tab-wrapper">
      <article className="forecast-day">
        <p className="day-description">Maandag</p>

        <section className="forecast-weather">
          <span>12&deg; C</span>
          <span className="weather-description">Licht Bewolkt</span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">Maandag</p>

        <section className="forecast-weather">
          <span>12&deg; C</span>
          <span className="weather-description">Licht Bewolkt</span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">Maandag</p>

        <section className="forecast-weather">
          <span>12&deg; C</span>
          <span className="weather-description">Licht Bewolkt</span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">Maandag</p>

        <section className="forecast-weather">
          <span>12&deg; C</span>
          <span className="weather-description">Licht Bewolkt</span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">Maandag</p>

        <section className="forecast-weather">
          <span>12&deg; C</span>
          <span className="weather-description">Licht Bewolkt</span>
        </section>
      </article>
    </div>
  );
}

export default ForecastTab;
