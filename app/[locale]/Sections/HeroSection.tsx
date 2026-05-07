"use client"
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";



export default function HeroSection() {
    const pathName = usePathname();
    const lang = pathName.split("").slice(1, 3).join("");

    const t = useTranslations("Home");



    return (
        <section className="min-h-screen bg-linear-to-r from-[#F8FAFC] via-[#E5EEF8] to-[#F8FAFC] dark:from-[#0A0F1A] dark:via-[#0C1D31] dark:to-[#0A0F1A]">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.5
                }}

                className="myContainer flex gap-10 max-xl:flex-col h-full items-center justify-between max-xl:justify-center min-h-screen">
                <div className="xl:w-1/2 max-xl:text-center space-y-5">
                    <h1 className={`text-6xl max-xl:text-4xl font-extrabold ${lang == "en" ? "leading-16" : "leading-18"} max-xl:leading-12 dark:text-white`}>{t("title")}  <span className="text-main dark:text-secondary">StackVerse</span></h1>
                    <p className="text-xl text-content dark:text-contentDark mb-10">{t("description")}</p>
                    <div className="flex flex-wrap max-xl:justify-center gap-5">
                        <a href="#courses" className="inline-block bg-main shadow-xl group text-white w-50 text-center py-4 rounded-xl font-semibold cursor-pointer hover:scale-105 hover:bg-[#2563EB] duration-200">{t("explore")}</a>
                        <a href="#contact" className="inline-block bg-white border border-slate-200 shadow w-50 text-center py-4 rounded-xl font-semibold cursor-pointer hover:scale-105 duration-200 dark:bg-slate-900 dark:hover:bg-slate-800/50  dark:text-white dark:border-slate-700"> {t("contact")} <Send className="size-4 inline group-hover:translate-x-0.5 duration-300" /></a>
                    </div>
                </div>
                <div className="max-xl:hidden">
                    <Image src={"/assets/images/hero.svg"} alt="Hero Section Image" width={500} height={500}></Image>
                </div>
            </motion.div>
        </section>
    )
}
