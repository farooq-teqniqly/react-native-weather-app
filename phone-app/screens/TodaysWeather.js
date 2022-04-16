import { Text } from "react-native";
import { useState, useEffect } from "react";
import { getCurrentWeatherAsync, nullWeather } from "../weatherService";

function TodaysWeather() {
  const [currentWeather, setCurrentWeather] = useState(nullWeather);

  useEffect(() => {
    getCurrentWeatherAsync().then((weather) => {
      setCurrentWeather(weather);
    });
  }, []);
  return (
    <>
      <Text>{currentWeather.temp}</Text>
      <Text>{currentWeather.description}</Text>
      <Text>{currentWeather.wind}</Text>
      <Text>{currentWeather.windDirection}</Text>
      <Text>{currentWeather.dt}</Text>
    </>
  );
}

export default TodaysWeather;
