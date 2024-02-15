import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Next.js Admin Dashboard",
    template: "%s | Next.js Admin Dashboard",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} h-full`}>
        <div className="main">
          <div className="gradient"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
