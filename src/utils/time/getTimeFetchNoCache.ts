import Time from "./Time";

async function getTimeFetchNoCache(): Promise<Time> {
  console.log("Running fetch request with no cache");
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Argentina/Cordoba",
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default getTimeFetchNoCache;
