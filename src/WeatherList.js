import React from 'react';

export default function WeatherList({ weatherData: {
  temp, temp_min, temp_max
} }) {
  return (
    <div>
      <p>Temperature: {temp}</p>
      <p>Low: {temp_min}</p>
      <p>High: {temp_max}</p>
    </div>
  );
}
