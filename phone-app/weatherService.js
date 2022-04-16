import WeatherApiEndpoints from "./constants/weatherApiEndpoints";
import axios from "axios";

export const nullWeather = {
  description: null,
  temp: null,
  wind: null,
  windDirection: null,
  dt: null,
};

export async function getCurrentWeatherAsync() {
  weather = {};

  const res = await axios.get(WeatherApiEndpoints.getWeather);

  return {
    description: res.data.weather[0].main,
    temp: res.data.main.temp,
    wind: res.data.wind.speed,
    windDirection: res.data.wind.deg,
    dt: res.data.dt,
  };
}
