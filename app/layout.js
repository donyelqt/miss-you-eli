import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "miss na kita, eli",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon"  href="/myeli3.png" />
      </head>
      <body className={outfit.className}>
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
