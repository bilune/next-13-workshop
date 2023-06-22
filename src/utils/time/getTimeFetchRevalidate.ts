import Time from "./Time";

async function getTimeFetchRevalidate(): Promise<Time> {
  console.log("Running fetch request with revalidate every 10 seconds");
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Argentina/Cordoba",
    {
      next: { revalidate: 10 },
    }
  );
  return res.json();
}

export default getTimeFetchRevalidate;
