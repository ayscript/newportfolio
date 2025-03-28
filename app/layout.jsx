import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "./index.css"
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ayomide Olaleye",
  description: "Frontend Web Developer (HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, shadcn)",
  openGraph: {
    title: "Ayomide Olaleye",
    description: "Frontend Web Developer (HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, shadcn)",
    images: [
      {
        url: "/assets/avater.png",
        width: 1200,
        height: 630,
        alt: "Ayomide Olaleye - Frontend Developer",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </Head>
      <body cz-shortcut-listen="true" className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
