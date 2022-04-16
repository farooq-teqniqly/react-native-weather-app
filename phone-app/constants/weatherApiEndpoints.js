const WeatherApiRootUrl = "https://api.openweathermap.org/data/2.5/weather";
const Units = "imperial";
const Latitude = "47.6038321";
const Longitude = "-122.3300624";
const ApiKey = "0bfd9c8ec382ac598e201a033426f6ef";

const GetCurrentWeatherUrl = `${WeatherApiRootUrl}?units=${Units}&lat=${Latitude}&lon=${Longitude}&appid=${ApiKey}`;

const WeatherApiEndpoints = {
  getWeather: GetCurrentWeatherUrl,
};

export default WeatherApiEndpoints;
