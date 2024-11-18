import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans, Nunito } from "next/font/google";


// const notoSans = Noto_Sans({
//   subsets: ["latin"],
//   weight: ["600"],
// });

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
