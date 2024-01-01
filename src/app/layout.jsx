import Navbar from "@/components/Utilities/Navbar";
import "./globals.css";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "HELLOS ROOMs",
  description: "List Anime List Indonesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
