import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Satyam Nage — Web Developer",
  description:
    "Web Developer with 2+ years of experience building scalable React & Next.js applications. Based in Pune, India.",
  keywords: [
    "Satyam Nage",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Pune",
    "India",
  ],
  authors: [{ name: "Satyam Prakash Nage" }],
  openGraph: {
    title: "Satyam Nage — Web Developer",
    description:
      "Web Developer specialising in React & Next.js. 2+ years building production interfaces.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
