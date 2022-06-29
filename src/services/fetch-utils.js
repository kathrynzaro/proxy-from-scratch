export async function getPokemon(filter) {
  const rawData = await fetch(`/.netlify/functions/pokemon?pokeQuery=${filter}`);
  const data = await rawData.json();

  return data;
}

export async function getBusinesses(filter) {
  const rawData = await fetch(`/.netlify/functions/yelp?yelpQuery=${filter}`);
  const data = await rawData.json();

  return data;
}