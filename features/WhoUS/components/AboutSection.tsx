"use client"
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl'

export default function AboutSection() {
    const t = useTranslations("About");
    const features = t.raw("features")

    const FEATURES = [
        {
            id: 1,
            title: features[0].title,
            desc: features[0].desc,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-6 h-6 text-main"><circle cx={12} cy={12} r={10} /><circle cx={12} cy={12} r={6} /><circle cx={12} cy={12} r={2} /></svg>
        },
        {
            id: 2,
            title: features[1].title,
            desc: features[1].desc,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-6 h-6 text-main"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>

        },
        {
            id: 3,
            title: features[2].title,
            desc: features[2].desc,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6 text-main"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx={12} cy={8} r={6} /></svg>

        },
        {
            id: 4,
            title: features[3].title,
            desc: features[3].desc,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-main"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>

        }
    ]


    return (
        <section id='about' className='bg-[#F8FAFC] dark:bg-[#0A0F1A]'>
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
                className='myContainer flex  justify-between items-center max-lg:flex-col'>
                <div className='lg:w-1/2 max-lg:mb-8'>
                    <header className='mb-5'>
                        <h2 className='text-[3rem] max-lg:text-4xl font-bold mb-5 dark:text-white'>{t("title")} <span className='text-main dark:text-secondary'>StackVerse</span></h2>

                    </header>
                    <div>
                        <p className='text-lg text-content mb-5 text-justify dark:text-contentDark'>{t("desc1")}</p>
                        <p className='text-lg text-content  text-justify dark:text-contentDark'>{t("desc2")}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-[45%] ">
                    {FEATURES.map((item, index: number) => <div key={index} className="flex items-start space-x-4 duration-300 hover:translate-x-2">
                        <div className="shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-main/10 flex items-center justify-center">
                                {item.icon}
                            </div>
                        </div>
                        <div>
                            <h3 className=" font-semibold text-primary mb-1 dark:text-white">{item.title}</h3>
                            <p className="text-sm text-content dark:text-contentDark">
                                {item.desc}</p>
                        </div>
                    </div>)}
                </div>

            </motion.div>
        </section>
    )
}
