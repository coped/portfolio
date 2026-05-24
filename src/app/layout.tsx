import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { LORA_FONT } from "@/lib/constants";
import "./reset.css";
import "./app.css";

export const metadata: Metadata = {
  title: "Dennis Cope | cope.sh",
  description: "Dennis Cope's portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`app ${LORA_FONT.variable}`}>
      <body>{children}</body>
    </html>
  );
}
