import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TaskProvider } from "./context/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gestion de tareas",
  description: "APAP - Gestion de tareas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>{children}</TaskProvider>
      </body>
    </html>
  );
}
