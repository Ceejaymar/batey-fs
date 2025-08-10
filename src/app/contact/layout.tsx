import { type PropsWithChildren } from "react";

export default function ContactLayout({ children }: PropsWithChildren) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {children}
    </div>
  );
}
