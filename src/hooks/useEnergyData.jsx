import { useState, useEffect, useCallback } from "react";

const useEnergyData = ({ timeRange }) => {
  const [generatorEnergy, setGeneratorEnergy] = useState([]);
  const [solarEnergy, setSolarEnergy] = useState([]);
  const [gridEnergy, setGridEnergy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  // Use constants to avoid re-creating variables inside hooks
  const API_URL = import.meta.env.VITE_PUBLIC_URL;
  const email = import.meta.env.VITE_PUBLIC_EMAIL;
  const password = import.meta.env.VITE_PUBLIC_PASSWORD;

  // Fetch access token
  const fetchAccessToken = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/accounts/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Failed to fetch access token");

      const data = await response.json();
      setToken(data?.data?.access);
      setRefreshToken(data?.data?.refresh);
    } catch (err) {
      setError(err.message || "Failed to fetch token");
      console.error("Access Token Error:", err);
    }
  }, [API_URL, email, password]);

  // Refresh access token
  const refreshAccessToken = useCallback(async () => {
    if (!refreshToken) {
      console.warn("No refresh token found. Fetching a new access token.");
      await fetchAccessToken();
      return;
    }

    try {
      const response = await fetch(`${API_URL}/accounts/token/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (!response.ok) throw new Error("Failed to refresh access token");

      const data = await response.json();
      setToken(data?.access);
    } catch (err) {
      console.error("Error refreshing token:", err);
      setError("Session expired. Please log in again.");
      await fetchAccessToken();
    }
  }, [API_URL, refreshToken, fetchAccessToken]);

  // Fetch data from API
  const fetchData = useCallback(async () => {
    if (!token) return;

    // Define endpoints inside useCallback to fix ESLint warning
    const endpoints = {
      generator: `${API_URL}/pop/cccl-generator-data/?device_code=GREEN_POWER_GENERATOR&topic=CCCL/PURBACHAL/ENM_01&time_range=${timeRange}`,
      solar: `${API_URL}/pop/solar-energy-consumption/?time_range=${timeRange}`,
      grid: `${API_URL}/pop/cpm-enynow-data/?device_code=3071523B00003&topic=MQTT_ENY_NOW&time_range=${timeRange}`,
    };

    try {
      setLoading(true);

      const responses = await Promise.all(
        Object.entries(endpoints).map(async ([key, url]) => {
          const res = await fetch(url, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          });

          if (res.status === 401) {
            console.warn("Token expired. Refreshing token...");
            await refreshAccessToken();
            return null;
          }

          if (!res.ok) throw new Error(`Failed to fetch ${key} data`);
          return res.json();
        })
      );

      // Update state only if responses are valid
      if (responses[0]) {
        setGeneratorEnergy(responses[0]?.data?.[0]?.energy_consumption || 0);
      }

      if (responses[1]) {
        setSolarEnergy(responses[1]?.data?.energy_consumption || 0);
      }
      if (responses[2]) {
        setGridEnergy(responses[2]?.data[0]?.energy_consumption || 0);
      }
      setError(null);
    } catch (err) {
      console.error("Fetch Data Error:", err);
      setError(err.message || "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, [API_URL, token, timeRange, refreshAccessToken]);

  // Fetch token on mount
  useEffect(() => {
    if (!token) fetchAccessToken();
  }, [fetchAccessToken, token]);

  // Fetch data when token is available
  useEffect(() => {
    if (!token) return;

    fetchData();
    const interval = setInterval(fetchData, 60 * 5000); // Refresh every 60 sec

    return () => clearInterval(interval);
  }, [fetchData, token]);

  return { generatorEnergy, solarEnergy, gridEnergy, loading, error };
};

export default useEnergyData;
