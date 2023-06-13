interface Digimon {
  name: string;
  images: { href: string; transparent: boolean }[];
  descriptions: { origin: string; language: string; description: string }[];
}

async function getDigimonFetchRevalidate(id: number): Promise<Digimon> {
  console.log("Running fetch request with revalidate every 10 seconds");
  const res = await fetch(`https://digi-api.com/api/v1/digimon/${id}`, {
    next: { revalidate: 10 },
  });
  return res.json();
}

export default getDigimonFetchRevalidate;
