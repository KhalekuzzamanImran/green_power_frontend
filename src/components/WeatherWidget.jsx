import useWeather from "../hooks/useWeather";

export default function WeatherWidget() {
  const { weatherData, loading, error } = useWeather() || {
    weatherData: null,
    loading: false,
    error: null,
  };

  if (loading) return <p style={styles.loading}>Loading...</p>;
  if (!weatherData) return null;

  const condition = weatherData?.weather?.[0]?.main?.toLowerCase() || "unknown";

  const conditionMap = {
    clear: { label: "Sunny", icon: "/images/icons/sun.png" },
    clouds: { label: "Cloudy", icon: "/images/icons/cloud.png" },
    rain: { label: "Rainy", icon: "/images/icons/rain.png" },
    drizzle: { label: "Drizzling", icon: "/images/icons/drizzle.png" },
    thunderstorm: { label: "Stormy", icon: "/images/icons/storm.png" },
    snow: { label: "Snowy", icon: "/images/icons/snow.png" },
    mist: { label: "Foggy", icon: "/images/icons/mist.png" },
    haze: { label: "Hazy", icon: "/images/icons/haze.png" },
  };

  const weatherCondition = conditionMap[condition]?.label || "Unknown";
  const weatherIcon = conditionMap[condition]?.icon || "/images/default.png";
  const windSpeedKmh = (weatherData?.wind?.speed * 3.6).toFixed(1);
  const windDirection = weatherData?.wind?.deg || 0;
  const country = weatherData?.sys?.country || "Unknown Country";

  return (
    <div
      style={{
        width: "170px",
        height: "95%",
        backgroundColor: "#e3f1f4",
        border: "2px solid #507680",
        borderRadius: "5px",
        color: "#0d355c",
        padding: "5px 10px",
      }}
    >
      <div className="d-flex justify-content-between gap-2">
        <h4 className="m-0">{`${weatherData?.main?.temp?.toFixed(1)} °C`}</h4>
        <img
          src={weatherIcon}
          alt={weatherCondition}
          width={30}
          height={30}
          style={{ marginRight: "10px" }}
        />
      </div>
      <p className="m-0 p-0" style={{ fontSize: "14px" }}>
        Dhaka, Bangladesh
      </p>
      <p className="m-0 p-0" style={{ fontSize: "14px" }}>
        Wind: <span className="fw-semibold">{windSpeedKmh}</span> km/h (
        <span className="fw-semibold">{windDirection}°</span>)
      </p>
    </div>
  );
}

// Define styles
const styles = {
  container: {
    color: "black",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginLeft: "3px",
    paddingTop: "8px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
  },
  weatherInfo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  temperature: {
    fontSize: "16px",
    fontWeight: "600",
  },
  temperatureValue: {
    color: "#dc2626",
    fontWeight: "600",
  },
  condition: {
    fontSize: "12px",
    color: "#374151",
    fontWeight: "500",
  },
  windInfo: {
    fontSize: "14px",
    color: "#374151",
    marginTop: "2px",
    marginLeft: "2px",
  },
  windValue: {
    color: "#dc2626",
    fontWeight: "600",
  },
  loading: {
    fontSize: "16px",
    color: "#4b5563",
  },
  error: {
    fontSize: "16px",
    color: "#dc2626",
  },
};
