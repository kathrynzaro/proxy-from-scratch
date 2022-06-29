import React from 'react';
import { useEffect, useState } from 'react';
import BusinessesList from './BusinessesList';
import { getYelp } from './services/fetch-utils';
import Spinner from './Spinner';

export default function YelpSearch() {
  const [businesses, setBusinesses] = useState([]);
  const [yelpQuery, setYelpQuery] = useState('97214');
  const [loading, setLoading] = useState(false);

  async function loadYelp() {
    setLoading(true);
    const data = await getYelp(yelpQuery);
    setLoading(false);

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
      {
        loading
          ? <Spinner />
          : <BusinessesList businesses={businesses} />
      }
    </div>
  );
}
