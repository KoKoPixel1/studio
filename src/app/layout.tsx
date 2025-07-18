import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { ThemeProvider } from "@/components/common/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "IIEC Website",
  description: "Official website of the Innovation and Incubation Entrepreneurship Cell (IIEC), IISER Berhampur.",
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#192A56' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-body antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
