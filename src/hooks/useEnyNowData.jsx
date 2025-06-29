import { useState, useEffect, useCallback } from "react";

const useEnyNowData = ({ timeRange }) => {
  const [enyNowData, setEnyNowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const url = import.meta.env.VITE_PUBLIC_URL || "";
  const email = import.meta.env.VITE_PUBLIC_EMAIL;
  const password = import.meta.env.VITE_PUBLIC_PASSWORD;

  // Function to fetch the access & refresh token
  const fetchAccessToken = useCallback(async () => {
    try {
      const response = await fetch(`${url}/accounts/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Failed to fetch access token");

      const data = await response.json();
      setToken(data?.data?.access);
      setRefreshToken(data?.data?.refresh);
    } catch (err) {
      console.error("Error fetching access token:", err);
      setError(err.message || "Failed to fetch token");
    }
  }, [url, email, password]);

  // Function to refresh the access token
  const refreshAccessToken = useCallback(async () => {
    if (!refreshToken) {
      await fetchAccessToken(); // Get new tokens if refresh token is missing
      return;
    }

    try {
      const response = await fetch(`${url}/accounts/token/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (!response.ok) throw new Error("Failed to refresh access token");

      const data = await response.json();
      setToken(data?.access);
    } catch (err) {
      console.error("Error refreshing access token:", err);
      setError(err.message || "Failed to refresh token");
      await fetchAccessToken(); // Fallback to getting a new access token
    }
  }, [url, refreshToken, fetchAccessToken]);

  // Function to fetch the EnyNow data
  const fetchData = useCallback(async () => {
    if (!token) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${url}/pop/cpm-enynow-data/?device_code=3071523B00003&topic=MQTT_ENY_NOW&time_range=${timeRange}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 401) {
        console.warn("Access token expired, refreshing token...");
        await refreshAccessToken();
        return;
      }

      if (!response.ok)
        throw new Error(`Failed to fetch data: ${response.statusText}`);

      const jsonData = await response.json();
      setEnyNowData(jsonData?.data?.[0]?.energy_consumption || 0);
    } catch (err) {
      console.error("Error fetching EnyNow data:", err);
      setError(err.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, [token, timeRange, url, refreshAccessToken]);

  // Fetch token on mount
  useEffect(() => {
    if (!token) fetchAccessToken();
  }, [fetchAccessToken, token]);

  // Fetch data when token is available and update every minute
  useEffect(() => {
    if (!token) return;

    fetchData();
    const interval = setInterval(fetchData, 60 * 1000);

    return () => clearInterval(interval);
  }, [fetchData, token]);

  return { enyNowData, loading, error };
};

export default useEnyNowData;
