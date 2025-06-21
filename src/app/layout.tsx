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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {/* Background Elements */}
          <div className="fixed inset-0 -z-20 h-full w-full bg-background" />
          <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.1),transparent_35%),radial-gradient(circle_at_80%_70%,hsl(var(--secondary)/0.1),transparent_35%)]" />
          
          <LoadingScreen />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
