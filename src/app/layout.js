import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const myFont = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Results summary component",
  description: "Created by Anass GOUZGAR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
