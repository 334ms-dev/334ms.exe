import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "334ms.exe",
  description: "Personal portfolio showcasing projects and skills",
  keywords: ["developer", "portfolio", "web development", "projects"],
  icons: {
    icon: "https://mc-heads.net/avatar/334ms/64",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
