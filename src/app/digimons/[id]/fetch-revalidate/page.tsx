/* eslint-disable @next/next/no-img-element */

import getDigimonFetchRevalidate from "@/utils/digimon/getDigimonFetchRevalidate";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const digimonData = await getDigimonFetchRevalidate(id);

  return (
    <>
      <h1 className="text-xl">Digimon</h1>
      <img
        width={200}
        height={200}
        src={digimonData.images[0].href}
        alt="image"
      />
      <ul>
        <li>Name: {digimonData.name}</li>
        <li>Description: {digimonData.descriptions[1].description}</li>
      </ul>
    </>
  );
}
