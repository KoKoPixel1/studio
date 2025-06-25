import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow animate-page-in">{children}</main>
      <Footer />
    </div>
  );
}
