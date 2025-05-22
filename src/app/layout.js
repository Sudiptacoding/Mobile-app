import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Your PopX Account",
  description: "Sign up for PopX to manage your business with ease. Fast, secure, and user-friendly mobile experience designed for professionals and agencies.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:w-[375px] md:h-[670px] mx-auto w-full max-h-screen `}
      >
        {children}
      </body>
    </html>
  );
}
