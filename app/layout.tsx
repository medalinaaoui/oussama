import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const helveticaMedium = localFont({
  src: "../public/font/helvetica/HelveticaNeueMedium.otf",
  variable: "--helveticaMedium",
});
const helvetica = localFont({
  src: "../public/font/helvetica/HelveticaNeueThin.otf",
});

export const metadata: Metadata = {
  title: "Oussama",
  description: "Oussama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.className} ${helveticaMedium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
