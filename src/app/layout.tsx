import "./globals.css";
import type { GetServerSideProps, Metadata } from "next";
import { Inter, Prompt } from "next/font/google";
import NavbarMenu from "@/components/navbar/nav-menu";
import NavbarLogin from "@/components/navbar/nav-login";
import Footer from "@/components/footer/footer";

const prompt = Prompt({ subsets: ["thai"], weight: "400" });

export const metadata: Metadata = {
  title: "WiseBoQ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" w-full h-full">
      <body className={prompt.className}>
        <div className="border-0 border-b-2 border-yellow-400 shadow-md px-20">
          <NavbarLogin />
          <NavbarMenu />
        </div>
        <div className=" min-h-screen">{children}</div>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}