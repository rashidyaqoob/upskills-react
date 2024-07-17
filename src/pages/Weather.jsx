import React, { useState } from "react";
import Search from "../components/search/Search";
import CurrentWeather from "../components/currentWeather/currentWeather";

const Weather = () => {
  const [mainWeather, setMainweather] = useState();
  const handleSearchChange = (searchData) => {
    console.log(searchData);
    console.log("hello");

    setMainweather(searchData.main);
  };
  return (
    <>
      <Search onSearchChange={handleSearchChange} />
      <CurrentWeather main={mainWeather} />
    </>
  );
};

export default Weather;
