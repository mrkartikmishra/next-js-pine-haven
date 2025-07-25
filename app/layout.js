import "./globals.css";

import Header from "@/app/_components/Header";
import { Josefin_Sans } from "next/font/google";

const josefinFonts = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Pine Haven",
  description: "The Pine Haven Nest for a relaxing time spent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefinFonts.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
