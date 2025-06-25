'use client';

import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { ScrollProgressBar } from "@/components/common/ScrollProgressBar";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgressBar />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
