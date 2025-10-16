// import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

import DashboardWeatherItem from "./DashboardWeatherItem";
import type { DashboardWeatherItemProps } from "./DashboardWeatherItem";

type DashBoardWeatherProps = {
  className?: string;
  isSelected: boolean;
};

type DashboardWeatherApiProps = {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
  };
};

export default function DashboardWeather({
  className,
  isSelected,
}: DashBoardWeatherProps) {
  const {
    data: weather,
    loading,
    error,
  } = useFetch<DashboardWeatherApiProps>(
    "https://api.open-meteo.com/v1/forecast?latitude=19.4326&longitude=-99.1332&current=temperature_2m,wind_speed_10m,relative_humidity_2m&timezone=auto",
    isSelected
  );

  const weatherItems: DashboardWeatherItemProps[] = [
    {
      title: "Temperatura",
      background: "lightpurple",
      color: "darkpurple",
      nameIcon: "thermometer",
      measure: `${weather?.current.temperature_2m.toString()}°C`,
      description: "Ciudad de Mexico",
    },
    {
      title: "Viento",
      background: "lightgreen",
      color: "darkgreen",
      nameIcon: "air",
      measure: `${weather?.current.wind_speed_10m.toString()}Km/h`,
      description: "Velocidad del Viento",
    },
    {
      title: "Humedad",
      background: "lightyellow",
      color: "darkyellow",
      nameIcon: "water_drop",
      measure: `${weather?.current.relative_humidity_2m.toString()}%`,
      description: "Humedad Relativa",
    },
  ];

  return loading ? (
    <p>Obteniendo Datos del Clima</p>
  ) : error ? (
    <p>Se ha obtenido un error: {error}</p>
  ) : (
    <section
      className={`border-2 border-red-500 grid grid-cols-1 grid-rows-2 gap-3 overflow-hidden transition-all duration-550 z-[-2] ${className}`}
    >
      {weatherItems.map((item, index) => (
        <DashboardWeatherItem
          key={index}
          title={item.title}
          background={item.background}
          color={item.color}
          nameIcon={item.nameIcon}
          measure={item.measure}
          description={item.description}
        />
      ))}
    </section>
  );
}
