import getDigimonFetchRevalidate from "@/utils/digimon/getDigimonFetchRevalidate";
import { ReactNode } from "react";

export default async function DigimonLayout({
  children,
  params: { id },
}: {
  children: ReactNode;
  params: { id: number };
}) {
  const digimon = await getDigimonFetchRevalidate(id);

  return <div className="digimon-layout">{children}</div>;
}
