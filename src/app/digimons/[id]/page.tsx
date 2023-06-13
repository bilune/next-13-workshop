/* eslint-disable @next/next/no-img-element */

interface Digimon {
  name: string;
  images: { href: string; transparent: boolean }[];
  descriptions: { origin: string; language: string; description: string }[];
}

async function getDigimon(id: number): Promise<Digimon> {
  const res = await fetch(`https://digi-api.com/api/v1/digimon/${id}`);
  return res.json();
}

// async function getPokemonLocations(name: string) {
//   const res = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/${name}/encounters`
//   );

//   // await new Promise((res) => {
//   //   setTimeout(res, 10000);
//   // });

//   return res.json();
// }

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const digimonData = await getDigimon(id);
  // const pokemonLocationsData = getPokemonLocations(name);

  // Wait for the promises to resolve
  // const [pokemon, pokemonLocations] = await Promise.all([
  //   pokemonData,
  //   pokemonLocationsData,
  // ]);

  return (
    <>
      <h1 className="text-xl">Digimon</h1>
      <img
        width={200}
        height={200}
        src={digimonData.images[0].href}
        alt="image"
      />
      <ul>
        <li>Name: {digimonData.name}</li>
        <li>Description: {digimonData.descriptions[1].description}</li>
      </ul>

      {/* <br />
      <h2 className="text-xl">Locations</h2>
      <ul>
        {pokemonLocations.map((locations: any) => {
          return (
            <li key={locations.location_area.name}>
              {locations.location_area.name}
            </li>
          );
        })}
      </ul> */}
    </>
  );
}
