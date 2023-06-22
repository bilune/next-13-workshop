import getTimeAxios from "@/utils/time/getTimeAxios";
import { ReactNode } from "react";

export default async function TimeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const time = await getTimeAxios();

  return <div className="digimon-layout">{children}</div>;
}
