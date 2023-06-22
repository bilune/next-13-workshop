import Time from "./Time";

async function getTimeFetch(): Promise<Time> {
  console.log("Running fetch request");
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Argentina/Cordoba"
  );
  return res.json();
}

export default getTimeFetch;
