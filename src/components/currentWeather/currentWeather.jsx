import React from "react";

const CurrentWeather = ({ main, wind }) => {
  console.log(main);
  return (
    <></>
    // <div className="weather-details">
    //   <h2>Main Details</h2>
    //   <div className="details-section">
    //     <p>
    //       <strong>Feels Like:</strong> {main.feels_like}
    //     </p>
    //     <p>
    //       <strong>Ground Level:</strong> {main.grnd_level}
    //     </p>
    //     <p>
    //       <strong>Humidity:</strong> {main.humidity}%
    //     </p>
    //     <p>
    //       <strong>Pressure:</strong> {main.pressure} hPa
    //     </p>
    //     <p>
    //       <strong>Sea Level:</strong> {main.sea_level} hPa
    //     </p>
    //     <p>
    //       <strong>Temperature:</strong> {main.temp}°F
    //     </p>
    //     <p>
    //       <strong>Max Temperature:</strong> {main.temp_max}°F
    //     </p>
    //     <p>
    //       <strong>Min Temperature:</strong> {main.temp_min}°F
    //     </p>
    //   </div>
    //   <h2>Wind Details</h2>
    //   <div className="details-section">
    //     <p>
    //       <strong>Direction:</strong> {wind.deg}°
    //     </p>
    //     <p>
    //       <strong>Gust:</strong> {wind.gust} mph
    //     </p>
    //     <p>
    //       <strong>Speed:</strong> {wind.speed} mph
    //     </p>
    //   </div>
    // </div>
  );
};

export default CurrentWeather;
