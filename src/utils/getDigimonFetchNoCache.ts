interface Digimon {
  name: string;
  images: { href: string; transparent: boolean }[];
  descriptions: { origin: string; language: string; description: string }[];
}

async function getDigimonFetchNoCache(id: number): Promise<Digimon> {
  console.log("Running fetch request with no cache");
  const res = await fetch(`https://digi-api.com/api/v1/digimon/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default getDigimonFetchNoCache;
