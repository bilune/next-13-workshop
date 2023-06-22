import { ReactNode } from "react";
import getTimeFetchNoCache from "@/utils/time/getTimeFetchNoCache";

export default async function TimeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const time = await getTimeFetchNoCache();

  return <div className="digimon-layout">{children}</div>;
}
