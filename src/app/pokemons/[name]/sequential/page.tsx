/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

async function getPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

async function getPokemonLocations(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`);

  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  // throw new Error("Falló");

  return res.json();
}

export default async function Page({
  params: { name },
}: {
  params: { name: string };
}) {
  // Waits for Pokemon to load.
  const pokemon = await getPokemon(name);

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
      {/* Send the Pokemon information first,
          and wrap PokemonLocations in a suspense boundary */}
      <ErrorBoundary fallback={<div>Could not load Pokemon Location</div>}>
        <Suspense fallback={<div>Loading Pokemon locations...</div>}>
          <PokemonLocations pokemonId={pokemon.id} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

// PokemonLocations Component
async function PokemonLocations({ pokemonId }: { pokemonId: number }) {
  // Wait for the Pokemon Locations promise to resolve
  const pokemonLocations = await getPokemonLocations(pokemonId);

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
