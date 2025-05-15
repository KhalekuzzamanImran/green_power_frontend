import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "40px",
  pointerEvents: "none",
};

// Default to Dhaka if user location can't be fetched
const fallbackPosition = {
  lat: 23.840208,
  lng: 90.486422,
};

const GoogleMapComponent = () => {
  const [markerPosition, setMarkerPosition] = useState(fallbackPosition);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBQvHVNScKQbXvjlCNJ6ykdEbch-JC5DyQ",
  });

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setMarkerPosition({ lat: latitude, lng: longitude });
  //       },
  //       (error) => {
  //         console.error("Error getting location", error);
  //         setMarkerPosition(fallbackPosition); // fallback
  //       },
  //       {
  //         timeout: 10000,
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation not supported");
  //     setMarkerPosition(fallbackPosition); // fallback
  //   }
  // }, []);

  if (!isLoaded) return <div>Loading...</div>;

  const { lat, lng } = markerPosition;
  const googleMapsLink = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <div>
      <a
        href={googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block" }}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={markerPosition}
          zoom={14}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </a>
      <div
        className="d-flex justify-content-between px-2 fw-semibold"
        style={{ fontSize: "13px" }}
      >
        <span>Lat: {lat.toFixed(2)}</span> | <span>Lng: {lng.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
