/* eslint-disable @next/next/no-img-element */
import Digimon, { preload } from "@/components/Digimon/Digimon";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  preload(id); // starting loading the digimon data now

  return <Digimon id={id} />;
}
