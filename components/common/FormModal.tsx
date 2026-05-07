
import { motion } from "framer-motion";
import Form from "./Form";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
    isOpen: boolean,
    setIsOpen(status: boolean): void
}
export default function FormModal({ isOpen, setIsOpen }: Props) {

    const t = useTranslations("Courses")
    return (
        isOpen &&
        <div onClick={() => setIsOpen(false)} className='w-screen h-screen fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)]'>
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.9
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 0.3
                }}
                onClick={(e) => e.stopPropagation()}
                className='fixed z-10 bg-white mt-2 w-[95vw] lg:w-[80vw] left-1/2 top-1/2 -translate-1/2 p-10 shadow rounded-xl dark:bg-[#0D1322]'>
                <header className='flex justify-between items-center mb-8'>
                    <h3 className='text-3xl font-bold text-main'>{t("enroll")}</h3>
                    <button className='border border-gray-600 shadow rounded cursor-pointer hover:scale-105 duration-300 dark:border-gray-400'
                        onClick={() => setIsOpen(false)}
                    >
                        <X className='text-gray-600 dark:text-gray-400'></X>
                    </button>
                </header>
                <div>
                    <Form enroll={true}></Form>
                </div>
            </motion.div></div>
    )
}
