import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoUrl, geoApiOptions } from "../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `https://open-weather13.p.rapidapi.com/city/${inputValue}/EN`,
        geoApiOptions
      );
      const result = await response.json();
      console.log(result);

      if (result && result.name) {
        const city = result;
        return {
          options: [
            {
              label: `${city.name} ${city.sys.country}`,
              value: `${city.coord.lat} ${city.coord.lon}`,
              main: {
                feels_like: city.main.feels_like,
                grnd_level: city.main.grnd_level,
                humidity: city.main.humidity,
                pressure: city.main.pressure,
                sea_level: city.main.sea_level,
                temp: city.main.temp,
                temp_max: city.main.temp_max,
                temp_min: city.main.temp_min,
              },
              wind: {
                deg: city.wind.deg,
                gust: city.wind.gust,
                speed: city.wind.speed,
              },
            },
          ],
        };
      } else {
        return {
          options: [],
        };
      }
    } catch (error) {
      console.error("Error fetching options:", error);
      return {
        options: [],
      };
    }
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        onChange={handleChange}
        value={search}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
