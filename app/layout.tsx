import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AppHeader from "@/components/Layout/components/AppHeader";
import AppFooter from "@/components/Layout/components/AppFooter";
const inter = Inter({ subsets: ["latin"] });
import { noto_sans_tc, noto_sans_mono, noto_serif_tc } from "./fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "眼鏡官網",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant-TW"
      className={clsx(
        noto_sans_tc.variable,
        noto_serif_tc.variable,
        noto_sans_mono.variable
      )}
    >
      <body className={inter.className}>
        <main className="flex flex-col h-screen">
          <AppHeader />
          <div className="flex-1">{children}</div>
          <AppFooter />
        </main>
      </body>
    </html>
  );
}
