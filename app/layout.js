import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "404 - Not Found",
  description: "The link is broken",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-hidden">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale = 1, shrink-to-fit = no"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
