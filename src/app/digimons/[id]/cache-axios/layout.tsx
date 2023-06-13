import getDigimonAxiosCache from "@/utils/getDigimonAxiosCache";
import { ReactNode } from "react";

export default async function DigimonLayout({
  children,
  params: { id },
}: {
  children: ReactNode;
  params: { id: number };
}) {
  const digimon = await getDigimonAxiosCache(id);

  return <div className="digimon-layout">{children}</div>;
}
