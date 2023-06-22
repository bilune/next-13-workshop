import getTimeAxios from "@/utils/time/getTimeAxios";

export default async function Page() {
  const timeData = await getTimeAxios();

  return (
    <>
      <h1 className="text-xl">TIME IN CÓRDOBA</h1>
      <p>{timeData.datetime}</p>
    </>
  );
}
