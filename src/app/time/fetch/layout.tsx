import { ReactNode } from "react";
import getTimeFetch from "@/utils/time/getTimeFetch";

export default async function TimeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const time = await getTimeFetch();

  return <div className="digimon-layout">{children}</div>;
}
