import { useState, useEffect, useRef, useQuery } from "react";
import Weather from "./Weather.js";

function Search() {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=a15a7a44ab2d4cd89c2170445231305&q=" +
        query
    );
    const data = await response.json();
    setWeatherData(data);
    setQuery("");

    inputRef.current.value = "";
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  console.log(weatherData, "Weather Data");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          placeholder="Enter a city name"
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default Search;
