import type { Metadata } from "next";
import "./globals.css";
import { ThemeContextProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: "CristhDev",
  description: "CristhDev es un website para mostrar mis proyectos y ofrecer mis servicios como web developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
