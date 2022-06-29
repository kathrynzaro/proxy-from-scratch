import React from 'react';
import { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import { getPokemon } from './services/fetch-utils';

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState('');

  async function doLoad() {
    const data = await getPokemon(pokemonQuery);

    setPokemon(data.results);
  }

  useEffect(() => {
    doLoad();
  }, []); //eslint-disable-line

  async function handleSubmit(e) {
    e.preventDefault();
    await doLoad();

    setPokemonQuery('');
  }
  return (
    <div className='pokemon-search'>
      <form onSubmit={handleSubmit}>
        <input value={pokemonQuery} onChange={e => setPokemonQuery(e.target.value)} />
        <button>search</button>
      </form>
      <PokemonList pokemon={pokemon} />
    </div>
  );
}
