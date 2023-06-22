import getTimeFetchNoCache from "@/utils/time/getTimeFetchNoCache";

export default async function Page() {
  const timeData = await getTimeFetchNoCache();

  return (
    <>
      <h1 className="text-xl">TIME IN CÓRDOBA</h1>
      <p>{timeData.datetime}</p>
    </>
  );
}
