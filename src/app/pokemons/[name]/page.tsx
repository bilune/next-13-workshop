/* eslint-disable @next/next/no-img-element */
async function getPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

async function getPokemonLocations(name: string) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}/encounters`
  );
  await new Promise((res) => {
    setTimeout(res, 10000);
  });

  return res.json();
}

export default async function Page({
  params: { name },
}: {
  params: { name: string };
}) {
  console.log(name);
  // Initiate both requests in parallel
  const pokemonData = getPokemon(name);
  const pokemonLocationsData = getPokemonLocations(name);

  // Wait for the promises to resolve
  const [pokemon, pokemonLocations] = await Promise.all([
    pokemonData,
    pokemonLocationsData,
  ]);

  return (
    <>
      <h1 className="text-xl">Pokemon</h1>
      <img
        width={96}
        height={96}
        src={pokemon.sprites.front_default}
        alt="image"
      />
      <ul>
        <li>Name: {pokemon.name}</li>
        <li>Weight: {pokemon.weight}</li>
        <li>Height: {pokemon.height}</li>
      </ul>

      <br />
      <h2 className="text-xl">Locations</h2>
      <ul>
        {pokemonLocations.map((locations: any) => {
          return (
            <li key={locations.location_area.name}>
              {locations.location_area.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
