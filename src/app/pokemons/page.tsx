import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

async function getPokemons(): Promise<Pokemon[]> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10'", {
    // next: { revalidate: 60 },
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = (await res.json()) as { results: Pokemon[] };

  // await new Promise((res) => {
  //   setTimeout(res, 10000);
  // });

  return data.results;
}

export default async function Page() {
  const pokemons = await getPokemons();

  return (
    <main>
      <h1>Pokemons</h1>
      <br />
      <ul>
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.name}>
              <Link href={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
