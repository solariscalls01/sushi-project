import type { Metadata } from "next";
import "./globals.css";
import {sawarabi} from '@/app/ui/fonts'
import { CssBaseline, ThemeProvider } from "@mui/material";
import ThemeRegistry from "./themeregistry";


export const metadata: Metadata = {
  title: "Daimonji Sushi",
  description: "Created by Brian Dy",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sawarabi.className}>
        <ThemeRegistry>
          <CssBaseline />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
