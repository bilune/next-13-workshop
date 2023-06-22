import getDigimonAxios from "@/utils/digimon/getDigimonAxios";
import { ReactNode } from "react";

export default async function DigimonLayout({
  children,
  params: { id },
}: {
  children: ReactNode;
  params: { id: number };
}) {
  const digimon = await getDigimonAxios(id);

  return <div className="digimon-layout">{children}</div>;
}
