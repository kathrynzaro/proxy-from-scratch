import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {
        pokemon.map((poke, i) => <div
          key={poke.pokemon + i}
          className="pokemon">
          <p>{poke.pokemon}</p>
          <img src={poke.url_image} />
        </div>)
      }
    </div>
  );
}
