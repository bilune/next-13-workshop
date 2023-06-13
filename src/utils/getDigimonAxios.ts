import axios from "axios";

interface Digimon {
  name: string;
  images: { href: string; transparent: boolean }[];
  descriptions: { origin: string; language: string; description: string }[];
}

async function getDigimonAxios(id: number): Promise<Digimon> {
  console.log("Running axios request");
  const startTime = new Date().getTime(); // Record start time
  const res = await axios.get(`https://digi-api.com/api/v1/digimon/${id}`);
  const endTime = new Date().getTime(); // Record end time
  const elapsedTime = endTime - startTime; // Calculate elapsed time in milliseconds
  console.log(`Request completed in ${elapsedTime} ms`);
  return res.data;
}

export default getDigimonAxios;
