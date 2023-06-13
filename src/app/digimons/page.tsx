import Link from "next/link";

interface Digimon {
  id: number;
  name: string;
  href: string;
  image: string;
}

async function getDigimons(): Promise<Digimon[]> {
  const res = await fetch(
    "https://digi-api.com/api/v1/digimon?page=0&pageSize=0"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = (await res.json()) as { content: Digimon[] };

  // await new Promise((res) => {
  //   setTimeout(res, 10000);
  // });

  return data.content;
}

export default async function Page() {
  const digimons = await getDigimons();

  return (
    <main>
      <h1>Digimons</h1>
      <br />
      <ul>
        {digimons.map((digimon) => {
          return (
            <li key={digimon.name}>
              <Link href={`/digimons/${digimon.id}`}>{digimon.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
