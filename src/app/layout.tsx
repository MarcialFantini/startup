import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SectionFooter } from "@/components/SectionFooter";

export const metadata: Metadata = {
  title: "Marchu Dev",
  description: "Marchu Dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar></Navbar>
        {children}
        <SectionFooter></SectionFooter>
      </body>
    </html>
  );
}
