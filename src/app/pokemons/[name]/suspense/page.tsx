/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

async function getPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

async function getPokemonLocations(name: string) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}/encounters`
  );
  // await new Promise((res) => {
  //   setTimeout(res, 10000);
  // });

  throw new Error("Falló");
  return res.json();
}

export default async function Page({
  params: { name },
}: {
  params: { name: string };
}) {
  // Initiate both requests in parallel
  const pokemonData = getPokemon(name);
  const pokemonLocationData = getPokemonLocations(name);

  // Wait for the artist's promise to resolve first
  const pokemon = await pokemonData;

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
      {/* Send the artist information first,
          and wrap albums in a suspense boundary */}
      <ErrorBoundary fallback={<div>Fallooooo</div>}>
        <Suspense fallback={<div>Loading Pokemon locations...</div>}>
          <PokemonLocations promise={pokemonLocationData} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

// Albums Component
async function PokemonLocations({ promise }: { promise: Promise<any> }) {
  // Wait for the albums promise to resolve
  const pokemonLocations = await promise;

  return (
    <>
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
