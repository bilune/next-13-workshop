interface Digimon {
  name: string;
  images: { href: string; transparent: boolean }[];
  descriptions: { origin: string; language: string; description: string }[];
}

async function getDigimonFetch(id: number): Promise<Digimon> {
  console.log("Running fetch request");
  const res = await fetch(`https://digi-api.com/api/v1/digimon/${id}`);
  return res.json();
}

export default getDigimonFetch;
