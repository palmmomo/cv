import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palm | Full-Stack Developer & Cybersecurity Student",
  description:
    "Personal CV of Palm — a 3rd-year Digital Technology student specializing in Security, passionate about full-stack web development and network infrastructure.",
  keywords: ["Full-Stack Developer", "Cybersecurity", "Next.js", "React", "Thailand"],
  openGraph: {
    title: "Palm | Full-Stack Developer",
    description: "Personal CV of Palm, a Full-Stack Developer & Cybersecurity Student.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
