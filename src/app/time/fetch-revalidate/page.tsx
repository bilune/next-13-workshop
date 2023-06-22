import getTimeFetchRevalidate from "@/utils/time/getTimeFetchRevalidate";

export default async function Page() {
  const timeData = await getTimeFetchRevalidate();

  return (
    <>
      <h1 className="text-xl">TIME IN CÓRDOBA</h1>
      <p>{timeData.datetime}</p>
    </>
  );
}
