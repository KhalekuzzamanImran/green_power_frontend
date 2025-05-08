import { useState, useEffect } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coords, setCoords] = useState(null);

  const API_KEY = import.meta.env.VITE_PUBLIC_WEATHER_API_KEY;

  const getUserLocation = async () => {
    if (!("geolocation" in navigator)) {
      console.warn("Geolocation not supported. Using fallback coordinates.");
      setCoords({ lat: 23.840208, lon: 90.486422 });
      return;
    }

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      setCoords({ lat: latitude, lon: longitude });
    } catch (err) {
      console.warn("Could not retrieve location. Using fallback coordinates.");
      console.error("Geolocation Error:", err);
      setCoords({ lat: 23.840208, lon: 90.486422 });
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (!coords) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data!");
        }

        const data = await response.json();
        setWeatherData(data);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    const timerId = setInterval(fetchWeather, 60000); // Refresh every 60 sec

    return () => clearInterval(timerId);
  }, [coords]);

  return { weatherData, loading, error };
};

export default useWeather;
