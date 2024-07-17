import React, { useState } from "react";
import Search from "../components/search/Search";
import CurrentWeather from "../components/currentWeather/currentWeather";
import "../pages/weather.css";

const Weather = () => {
  const [mainWeather, setMainWeather] = useState();
  const [windData, setWindData] = useState();
  const [sysData, setSysData] = useState();

  const handleSearchChange = (searchData) => {
    console.log(searchData.sys);
    setMainWeather(searchData.main);
    setWindData(searchData.wind);
    setSysData(searchData.sys);
  };
  console.log(mainWeather, windData, sysData);

  return (
    <>
      <Search onSearchChange={handleSearchChange} />
      {mainWeather && windData && sysData && (
        <CurrentWeather main={mainWeather} wind={windData} sys={sysData} />
      )}
    </>
  );
};

export default Weather;
