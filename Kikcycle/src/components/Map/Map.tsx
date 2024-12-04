import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

type LatLngTuple = [number, number];

const defaultPosition: LatLngTuple = [3.0672, 101.6038];

const MyMap: React.FC = () => {
  const [userPosition, setUserPosition] = useState<LatLngTuple | null>(null);

  // Custom marker icon
  const KikCycleIcon = new L.Icon({
    iconUrl: '/logo.svg',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const userIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  // Use the Geolocation API to get the user's position
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log([latitude, longitude]);
          setUserPosition([latitude, longitude]);
        },
        (error) => {
          console.log(`Error retrieving user location : ${error.message}`);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <MapContainer
      center={defaultPosition}
      zoom={13}
      style={{ height: '500px', width: '100%', zIndex: 0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Default Marker */}
      <Marker position={defaultPosition} icon={KikCycleIcon}>
        <Popup>Default Location: Kuala Lumpur</Popup>
      </Marker>

      {/* User Location Marker */}
      {userPosition && (
        <Marker position={userPosition} icon={userIcon}>
          <Popup>You are here!</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MyMap;
