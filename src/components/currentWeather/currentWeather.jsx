import React from "react";
import {
  WiDaySunny,
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiThermometer,
  WiStrongWind,
  WiBarometer,
} from "react-icons/wi";

const CurrentWeather = ({ main, wind, sys }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      <div className="weather-container">
        <h2>Main Details</h2>
        <div className="details-section">
          <p>
            <WiThermometer size={24} />
            <strong>Feels Like:</strong> {main.feels_like ?? "N/A"}
          </p>
          <p>
            <WiBarometer size={24} />
            <strong>Pressure:</strong> {main.pressure ?? "N/A"} hPa
          </p>
          <p>
            <WiHumidity size={24} />
            <strong>Humidity:</strong> {main.humidity ?? "N/A"}%
          </p>
          <p>
            <WiThermometer size={24} />
            <strong>Temperature:</strong> {main.temp ?? "N/A"}°F
          </p>
          <p>
            <WiThermometer size={24} />
            <strong>Max Temperature:</strong> {main.temp_max ?? "N/A"}°F
          </p>
          <p>
            <WiThermometer size={24} />
            <strong>Min Temperature:</strong> {main.temp_min ?? "N/A"}°F
          </p>
          <p>
            <WiSunrise size={24} />
            <strong>Sunrise:</strong> {sys ? formatTime(sys.sunrise) : "N/A"}
          </p>
          <p>
            <WiSunset size={24} />
            <strong>Sunset:</strong> {sys ? formatTime(sys.sunset) : "N/A"}
          </p>
        </div>
        <h2>Wind Details</h2>
        <div className="details-section">
          <p>
            <WiStrongWind size={24} />
            <strong>Speed:</strong> {wind.speed ?? "N/A"} mph
          </p>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
