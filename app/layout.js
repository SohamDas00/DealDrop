import "./globals.css";

export const metadata = {
  title: "DealDrop",
  description: "Track the product",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
