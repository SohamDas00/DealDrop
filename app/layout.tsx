import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // Useful if you use Tailwind CSS
});

export const metadata: Metadata = {
  title: "DealDrop",
  description: "Track Price of product",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
