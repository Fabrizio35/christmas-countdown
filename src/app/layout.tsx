import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christmas Countdown 2023",
  description: "Countdown to Christmas 2023 by Fabrizio Ossola",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
