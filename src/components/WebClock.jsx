import { useEffect, useState, useRef } from "react";

export default function WebClock() {
  const [currentTime, setCurrentTime] = useState(null);
  const [error, setError] = useState("");

  const referenceTime = useRef(null); // original server time
  const referenceNow = useRef(null); // local Date.now() when we got the server time

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fetchServerTime = async () => {
    try {
      const response = await fetch(
        "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Dhaka"
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const serverTime = new Date(
        data.year,
        data.month - 1,
        data.day,
        data.hour,
        data.minute,
        data.seconds
      );

      referenceTime.current = serverTime;
      referenceNow.current = Date.now();
      setCurrentTime(serverTime);
      setError("");
    } catch (err) {
      console.error("Failed to fetch server time:", err);
      setError("Failed to fetch server time. Retrying...");
    }
  };

  useEffect(() => {
    fetchServerTime();
  }, []);

  useEffect(() => {
    const retryInterval = setInterval(() => {
      if (!currentTime) {
        fetchServerTime();
      }
    }, 5000);

    return () => clearInterval(retryInterval);
  }, [currentTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (referenceTime.current && referenceNow.current) {
        const elapsed = Date.now() - referenceNow.current;
        const updatedTime = new Date(referenceTime.current.getTime() + elapsed);
        setCurrentTime(updatedTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderTime = () => {
    if (!currentTime) return null;

    const hours = String(currentTime.getHours()).padStart(2, "0");
    const minutes = String(currentTime.getMinutes()).padStart(2, "0");
    const seconds = String(currentTime.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const renderDate = () => {
    if (!currentTime) return null;

    const dayOfWeek = currentTime.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const monthName = monthNames[currentTime.getMonth()];
    const day = currentTime.getDate();
    const year = currentTime.getFullYear();

    return `${dayOfWeek}, ${monthName} ${day}, ${year}`;
  };

  return (
    <div style={styles.container}>
      {error && !currentTime ? (
        <p style={styles.error}>{error}</p>
      ) : currentTime ? (
        <>
          <h1 style={{ ...styles.time }} className="mt-0 mb-0">
            {renderTime()}
          </h1>
          <p style={styles.date} className="m-0">
            {renderDate()}
          </p>
        </>
      ) : (
        <p style={styles.loading}>Loading...</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "75%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    // backgroundColor: "white",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  loading: {
    fontSize: "16px",
    color: "#4b5563",
  },
  time: {
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "black",
    fontSize: "2rem",
    letterSpacing: "2px",
  },
  date: {
    color: "#333",
    fontSize: "1rem",
  },
};
