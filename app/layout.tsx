import type { Metadata } from "next";
import "./globals.css";
import {sawarabi} from '@/app/ui/fonts'


export const metadata: Metadata = {
  title: "Daimonji Sushi",
  description: "Created by Brian Dy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sawarabi.className}>{children}</body>
    </html>
  );
}
