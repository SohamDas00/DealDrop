import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from "next/font/google"
import './globals.css'

export const metadata = {
  title: "DealDrop",
  description: "Track the product",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.variable}>
        <body className="antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}