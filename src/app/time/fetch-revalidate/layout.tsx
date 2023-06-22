import { ReactNode } from "react";
import getTimeFetchRevalidate from "@/utils/time/getTimeFetchRevalidate";

export default async function TimeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const time = await getTimeFetchRevalidate();

  return <div className="digimon-layout">{children}</div>;
}
