"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Footer() {

    const t = useTranslations("Footer");
    return (
        <footer className='bg-white py-8 dark:bg-[#0A0F1A] border-t border-gray-200 dark:border-gray-800'>
            <div className='max-xl:px-10 xl:w-7xl xl:mx-auto flex max-md:flex-col justify-between items-center'>
                <div className="flex items-center gap-2 max-md:mb-2">
                    <Image src={"/assets/images/Logo.png"} alt='Logo' width={30} height={30}></Image>
                    <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                        Stack<span className="text-main">Verse</span>
                    </span>
                </div>
                <p className='text-sm text-content dark:text-contentDark'>© 2026 StackVerse. {t("rights")}</p>
            </div>
        </footer>
    )
}
