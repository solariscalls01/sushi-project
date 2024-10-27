// Import CSS and required types
import "globals.css";
import type { AppProps } from "next/app";

// Import Roboto Flex from next/font/google
import { Roboto_Flex } from "next/font/google";

// Configure the Roboto Flex font
const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--roboto-font", // Optional: If you need to use it as a CSS variable
  weight: ["400", "700"],
});

// Main app function
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
