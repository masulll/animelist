import { Gabarito } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "ANISCORE",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        {/* bisa masukin layout buat header footer disini */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
