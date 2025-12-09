import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "334ms | Developer & Creator",
  description: "Full-stack developer passionate about building modern web applications and crafting exceptional digital experiences.",
  keywords: ["334ms", "developer", "portfolio", "web development", "full-stack", "react", "nextjs", "typescript"],
  authors: [{ name: "334ms" }],
  creator: "334ms",
  icons: {
    icon: "https://mc-heads.net/avatar/334ms/64",
    apple: "https://mc-heads.net/avatar/334ms/180",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://334ms.exe.vercel.app",
    title: "334ms | Developer & Creator",
    description: "Full-stack developer passionate about building modern web applications.",
    siteName: "334ms Portfolio",
    images: [
      {
        url: "https://mc-heads.net/avatar/334ms/512",
        width: 512,
        height: 512,
        alt: "334ms",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "334ms | Developer & Creator",
    description: "Full-stack developer passionate about building modern web applications.",
    creator: "@334msDev",
    images: ["https://mc-heads.net/avatar/334ms/512"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
