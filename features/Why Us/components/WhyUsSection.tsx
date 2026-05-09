"use client"

import { motion } from "framer-motion";
import { Code2, HeadsetIcon, Map, RefreshCw } from "lucide-react"
import { useTranslations } from "next-intl"

const iconClasses = "w-6 h-6 text-center text-main group-hover:text-white duration-400"


export default function WhyUsSection() {
    const t = useTranslations("WhyUs");


    const reasons = [
        {
            id: 1,
            icon: <Map className={iconClasses} />,
            title: t("roadmap.title"),
            desc: t("roadmap.desc")
        },
        {
            id: 2,
            icon: <Code2 className={iconClasses} />,
            title: t("projects.title"),
            desc: t("projects.desc")
        },
        {
            id: 3,
            icon: <RefreshCw className={iconClasses} />,
            title: t("content.title"),
            desc: t("content.desc")
        },
        {
            id: 4,
            icon: <HeadsetIcon className={iconClasses} />,
            title: t("support.title"),
            desc: t("support.desc")
        }
    ]


    return (
        <section id="whyUs" className="bg-[#F8FAFC] dark:bg-[#0A0F1A]">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                className="myContainer">
                <header className="text-center mb-20">
                    <h2 className='section_title w-fit mx-auto relative text-4xl font-bold text-[#0f172a] dark:text-white'>{t("title")}</h2>
                </header>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {reasons.map((reason, index: number) =>
                        <motion.div
                            initial={{       
                                y: 15,
                            }}
                            whileInView={{
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                                ease: "easeOut",
                            }}
                            style={{
                                willChange: "transform, opacity",
                                transform: "translateZ(0)",
                                backfaceVisibility: "hidden",
                            }}
                            key={reason.id}
                            className="text-center shadow p-6 rounded-2xl border border-gray-200 group hover:border-main hover:scale-[1.02] hover:shadow-lg duration-300 dark:border-gray-700">
                            <div className="size-14  mx-auto mb-3  bg-[#F1F5F9] flex justify-center items-center rounded-full group-hover:bg-main group-hover:scale-105  duration-400 dark:bg-[#1E293B]">
                                {reason.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-3 dark:text-white">{reason.title}</h3>
                                <p className="text-content dark:text-contentDark">{reason.desc}</p>
                            </div>
                        </motion.div>
                    )}

                </div>
            </motion.div>

        </section>

    )
}
