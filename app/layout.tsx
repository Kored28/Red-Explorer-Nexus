import type { Metadata } from "next";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";



export const metadata: Metadata = {
  title: "Red Explorers",
  description: "Leave your mark on all over the world",
  icons: {
    icon: "/red-favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ToasterProvider/>
        {children}
      </body>
    </html>
  );
}
