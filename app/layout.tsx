import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DisableDevtools from "./components/DisableDevTools";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Download Anishie – Free Anime Streaming App for Android",
  description:
    "Download Anishie for Android. Stream anime with sub and dub, browse trending and top rated shows, save favorites, and pick up right where you left off. Free APK, no account needed.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DisableDevtools/>
        {children}
      </body>
    </html>
  );
}
