import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./reset.css";
import "./app.css";
import { Lora } from "next/font/google";

export const metadata: Metadata = {
  title: "Dennis Cope | cope.sh",
  description: "Dennis Cope's portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const lora = Lora({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`app ${lora.className}`}>
      <body>{children}</body>
    </html>
  );
}
