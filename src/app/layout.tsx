import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CristhDev",
  description: "CristhDev es un website para mostrar mis proyectos y ofrecer mis servicios como web developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
