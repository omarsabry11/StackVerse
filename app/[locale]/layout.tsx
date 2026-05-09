import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import Providers from "@/components/common/Providers";
import { getMessages } from "next-intl/server";
import Footer from "@/components/layout/Footer";

import { Poppins, Cairo } from "next/font/google";

export const metadata: Metadata = {
  title: "StackVerse — The Smart Way to Learn Programming",
  description: "StackVerse is a modern learning platform that helps developers go from zero to professional through structured roadmaps, real-world projects, and expert mentorship. It focuses on programming fundamentals, problem solving, data structures, algorithms, and modern web development.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-en",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ar",
  display: "swap",
});


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      dir={locale == "en" ? "ltr" : "rtl"}
      className={`${poppins.variable} ${cairo.variable} h-full antialiased `}
    >
      <body suppressHydrationWarning className={`min-h-full flex flex-col`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
              <div className="min-h-screen flex flex-col">
                <Navbar></Navbar>
                <div className="grow">
                  {children}
                </div>
                <Footer></Footer>
              </div>
          </Providers>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
