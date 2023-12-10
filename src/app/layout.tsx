import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import HeaderMobile from "@/components/header/header-mobile";
import SideNav from "@/components/sidebar/side-nav";
import PageWrapper from "@/components/wrapper/page-wrapper";
import MarginWidthWrapper from "@/components/wrapper/margin-width-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>

            <Header />
            <HeaderMobile />
            <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
