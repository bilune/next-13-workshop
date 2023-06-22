import getDigimonFetch from "@/utils/digimon/getDigimonFetch";
import { ReactNode } from "react";

export default async function DigimonLayout({
  children,
  params: { id },
}: {
  children: ReactNode;
  params: { id: number };
}) {
  const digimon = await getDigimonFetch(id);

  return <div className="digimon-layout">{children}</div>;
}
