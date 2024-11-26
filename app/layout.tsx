import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Inter-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Inter-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Inter-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Thin.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});



export const metadata = {
  title: 'Bonvas Tours',
  description: 'The joy of tourism.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

