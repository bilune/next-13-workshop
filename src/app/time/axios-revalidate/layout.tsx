import { ReactNode } from "react";
import getTimeAxios from "@/utils/time/getTimeAxios";

export const revalidate = 5; // Revalidate every 5 seconds

export default async function TimeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const time = await getTimeAxios();

  return <div className="digimon-layout">{children}</div>;
}
