"use client"
import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { NavLinks } from '@/types/NavLinks'
import { Link } from '@/src/i18n/navigation'

export function Navbar() {

    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false)
    const { theme, setTheme } = useTheme()
    const lang = pathname.split("/")[1];
    const t = useTranslations("Navbar");

    const LINKS: NavLinks[] = [
        {
            id: 1,
            text: t("home"),
            href: "#"
        },
        {
            id: 2,
            text: t("about"),

            href: "#about"
        },
        {
            id: 3,
            text: t("courses"),

            href: "#courses"
        },
        {
            id: 4,
            text: t("whyUs"),

            href: "#whyUs"
        },
        {
            id: 5,
            text: t("contact"),
            href: "#contact"
        },

    ]


    function toggleTheme() {
        setTheme((theme == "dark") ? "light" : "dark")
    }

    const changeLang = (newLang: string) => {
        router.push(`/${newLang}/${pathname.substring(3)}${window.location.hash}`);
    };

    useEffect(() => {
        function handleEsc(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        }
        function handleMouseDown() {
            setIsOpen(false)

        }
        window.addEventListener("keydown", handleEsc)
        document.body.addEventListener("mousedown", handleMouseDown)
        return () => {
            window.removeEventListener("keydown", handleEsc)
            document.body.removeEventListener("mousedown", handleMouseDown)
        }
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 bg-[#EBF2F9] border-b border-slate-200 dark:border-slate-800 shadow dark:bg-foreground`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href={`/`} className="flex items-center gap-2">

                        <Image src={"/assets/images/Logo.png"} alt='Logo' width={50} height={50}></Image>

                        <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                            Stack<span className="text-main">Verse</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className='flex items-center space-x-5 rtl:space-x-reverse'>
                            {LINKS.map((item) => <li key={item.id} >
                                <Link
                                    href={`/${item.href}`}
                                    className="text-slate-600 px-2 hover:text-main dark:text-slate-300 dark:hover:text-main text-sm font-semibold transition-colors"
                                >
                                    {item.text}
                                </Link>
                            </li>)}

                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => changeLang(lang == "en" ? "ar" : "en")}
                            className="px-3 py-1 rounded-md bg-slate-100 cursor-pointer dark:bg-slate-800 dark:text-contentDark text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                            {lang == "en" ? "عربي" : "EN"}
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-100 cursor-pointer dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => changeLang(lang == "en" ? "ar" : "en")}
                            className="px-3 py-1 rounded-md bg-slate-100 cursor-pointer dark:bg-slate-800 dark:text-contentDark text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                            {lang == "en" ? "عربي" : "EN"}
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleTheme()
                            }}
                            className="p-2 rounded-full bg-slate-100 cursor-pointer dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            aria-label="Toggle theme"
                        >

                            {theme === 'dark' ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: 'auto',
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        className={`md:hidden border-b  border-slate-200 dark:border-slate-800`}
                    >
                        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {LINKS.map((item) => <li key={item.id}>
                                <Link
                                    href={`/${item.href}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsOpen(false)
                                    }}
                                    className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-main dark:hover:text-main hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                >
                                    {item.text}
                                </Link>
                            </li>)}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
