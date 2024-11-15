import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "~/componets/layout/navigation";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen relative flex bg-cool-light overflow-hidden">
          <div className="w-[70px] min-w-[70px] h-full flex justify-center bg-white border-r border-cool-light-2">
            <Navigation />
          </div>
          <div className="w-full h-full bg-cool-light">{children}</div>
        </div>
      </body>
    </html>
  );
}
