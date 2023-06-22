/* eslint-disable @next/next/no-img-element */

import getDigimonFetch from "@/utils/digimon/getDigimonFetch";

export const preload = (id: number) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
  void getDigimonFetch(id);
};

export default async function Digimon({ id }: { id: number }) {
  const result = await getDigimonFetch(id);

  return (
    <>
      <h1 className="text-xl">Digimon</h1>
      <img width={200} height={200} src={result.images[0].href} alt="image" />
      <ul>
        <li>Name: {result.name}</li>
        <li>Description: {result.descriptions[1].description}</li>
      </ul>
    </>
  );
}
