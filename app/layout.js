import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "404 - Not Found",
  description: "The link is broken",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-hidden bg-black">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
