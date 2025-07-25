import "@/app/_styles/globals.css";

import Header from "@/app/_components/Header";
import { Josefin_Sans } from "next/font/google";

const josefinFonts = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s ::The Pine Haven – Forest Cabin Retreat",
    default: "The Pine Haven – Forest Cabin Retreat",
  },
  description:
    "Escape to The Pine Haven, a serene forest retreat offering cozy cabin stays surrounded by lush greenery. Book your perfect nature getaway and unwind in the tranquility of the woods.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinFonts.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
