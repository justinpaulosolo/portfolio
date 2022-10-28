import { Container } from "../components/layout/Container";
import { Inter } from "@next/font/google";
import "./globals.css";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="description" content="Full-stack developer" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white">
        <Container>{children}</Container>
      </body>
    </html>
  );
}
