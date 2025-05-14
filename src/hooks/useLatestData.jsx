import { useState, useEffect, useMemo } from "react";

const baseUrl = import.meta.env.VITE_PUBLIC_URL || "";

const useLatestData = () => {
  // Combine all data states into a single state object
  const [data, setData] = useState({
    environment: {},
    grid: {},
    solar: {},
    loading: true,
    error: null,
  });

  const endpoints = useMemo(
    () => ({
      environment: `${baseUrl}/environment/latest-data`,
      grid: `${baseUrl}/grid/latest-rt-data`,
      solar: `${baseUrl}/grid/latest-solar-data`,
    }),
    []
  );

  const fetchData = useMemo(
    () => async () => {
      try {
        const responses = await Promise.all(
          Object.values(endpoints).map((endpoint) =>
            fetch(endpoint).then((res) => {
              if (!res.ok) {
                throw new Error(`${res.status} ${res.statusText}`);
              }
              return res.json();
            })
          )
        );

        setData((prev) => ({
          ...prev,
          environment: responses[0] || {},
          grid: responses[1] || {},
          solar: responses[2] || {},
          loading: false,
          error: null,
        }));
      } catch (err) {
        console.error("Error fetching latest data:", err);
        setData((prev) => ({
          ...prev,
          loading: false,
          error: err.message || "An unknown error occurred",
        }));
      }
    },
    [endpoints]
  );

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, [fetchData]);

  return {
    environmentData: data.environment,
    gridData: data.grid,
    solarData: data.solar,
    loading: data.loading,
    error: data.error,
  };
};

export default useLatestData;
