/* eslint-disable @next/next/no-img-element */
import getTimeFetch from "@/utils/time/getTimeFetch";

export const preload = () => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
  void getTimeFetch();
};

export default async function Time() {
  const timeData = await getTimeFetch();

  return (
    <>
      <h1 className="text-xl">TIME IN CÓRDOBA</h1>
      <p>{timeData.datetime}</p>
    </>
  );
}
