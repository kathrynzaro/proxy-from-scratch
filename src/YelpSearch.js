import React from 'react';
import { useEffect, useState } from 'react';
import BusinessesList from './BusinessesList';
import { getYelp } from './services/fetch-utils';

export default function YelpSearch() {
  const [businesses, setBusinesses] = useState([]);
  const [yelpQuery, setYelpQuery] = useState('97214');

  async function loadYelp() {
    const data = await getYelp(yelpQuery);

    setBusinesses(data.businesses);
  }

  useEffect(() => {
    loadYelp();

  }, []); //eslint-disable-line

  async function handleYelpSubmit(e) {
    e.preventDefault();

    await loadYelp();

    setYelpQuery('');
  }

  return (
    <div className='yelp-search'>
      <form onSubmit={handleYelpSubmit}>
        <input value={yelpQuery} onChange={e => setYelpQuery(e.target.value)} />
        <button>search</button>
      </form>
      <BusinessesList businesses={businesses} />
    </div>
  );
}
