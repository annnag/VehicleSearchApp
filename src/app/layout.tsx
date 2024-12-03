import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vehicle Searching App",
  description: "Search for different types of vehicles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-indigo-500/10 from-10% via-sky-500/10 via-30% to-emerald-500/10 to-90%">
        {children}
      </body>
    </html>
  );
}
