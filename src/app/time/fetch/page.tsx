import getTimeFetch from "@/utils/time/getTimeFetch";

export default async function Page() {
  const timeData = await getTimeFetch();

  return (
    <>
      <h1 className="text-xl">TIME IN CÓRDOBA</h1>
      <p>{timeData.datetime}</p>
    </>
  );
}
