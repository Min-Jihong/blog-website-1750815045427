import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Sidebar from "@/components/common/Sidebar";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "블로그 웹사이트",
  description: "사용자가 글을 작성하고 공유할 수 있는 블로그 웹사이트입니다."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased flex"
      )}>
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}