import React, { useEffect } from 'react';
import { useState } from 'react';
import { getWeather } from './services/fetch-utils';
import WeatherList from './WeatherList';
import Spinner from './Spinner';

export default function WeatherSearch() {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherQuery, setWeatherQuery] = useState('Portland, OR 97214');
  const [loading, setLoading] = useState(false);

  async function doLoad() {
    setLoading(true);
    const data = await getWeather(weatherQuery);
    setLoading(false);
    setWeatherData(data.main);
  }

  useEffect(() => {
    doLoad();
  }, []); //eslint-disable-line

  async function handleSubmit(e) {
    e.preventDefault();
    await doLoad();

    setWeatherQuery('');
  }
  return (
    <div className='weather-search'>
      <form onSubmit={handleSubmit}>
        <input value={weatherQuery} onChange={e => setWeatherQuery(e.target.value)} />
        <button>search</button>
      </form>
      {
        loading
          ? <Spinner />
          : <WeatherList weatherData={weatherData} />
      }
    </div>
  );
}