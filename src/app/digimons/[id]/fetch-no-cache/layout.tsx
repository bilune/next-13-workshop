import getDigimonFetchNoCache from "@/utils/getDigimonFetchNoCache";
import { ReactNode } from "react";

export default async function DigimonLayout({
  children,
  params: { id },
}: {
  children: ReactNode;
  params: { id: number };
}) {
  const digimon = await getDigimonFetchNoCache(id);

  return <div className="digimon-layout">{children}</div>;
}
