import axios from 'axios';
const WEATHER_API_KEY = 'd6d5c3826653c7e0268747382f0424a8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    "type": FETCH_WEATHER,
    "payload": request,
  }
}