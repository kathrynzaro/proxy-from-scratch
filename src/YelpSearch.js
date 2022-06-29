import React from 'react';
import { useEffect, useState } from 'react';
import BusinessesList from './BusinessesList';
import { getBusinesses } from './services/fetch-utils';


export default function YelpSearch() {
  const [businesses, setBusinesses] = useState([]);
  const [businessQuery, setBusinessQuery] = useState('');

  async function loadYelp() {
    const data = await getBusinesses(businessQuery);

    setBusinesses(data.businesses);
  }

  useEffect(() => {
    loadYelp();
  }, []); //eslint-disable-line

  async function handleYelpSubmit(e) {
    e.preventDefault();
    await loadYelp();

    setBusinessQuery('');
  }
  return (
    <div className='yelp-search'>
      <form onSubmit={handleYelpSubmit}>
        <input value={businessQuery} onChange={e => setBusinessQuery(e.target.value)} />
        <button>search</button>
      </form>
      <BusinessesList businesses={businesses} />
    </div>
  );
}
