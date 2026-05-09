"use client"
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import From from "@/components/common/Form";
import { MessageCircle } from "lucide-react";
import Form from "@/components/common/Form";



export default function ContactSection() {

    const t = useTranslations("Contact");

    function sendWhatsAppMessage(): void {
        const phoneNumber = "+201217719650";
        const message = "Hello, I would like to get in touch!";
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappLink, "_blank");
    };
    return (
        <section id="contact" className="bg-[#F8FAFC] dark:bg-[#0D1322]">
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
                className="myContainer">
                <header className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-[#0f172a] dark:text-white mb-4">{t("title")}</h2>
                    <p className="text-content text-lg dark:text-contentDark">{t("subtitle")}</p>
                </header>

                <div className="shadow-lg border border-gray-200 dark:border-gray-700 p-6 rounded-2xl">
                    <Form course={null} enroll={false}></Form>
                    <div className="mt-8 border-t-2 border-gray-200 pt-5 dark:border-gray-700">
                        <p className="text-[#64748b] text-center mb-5 text-sm ">{t("orConnect")}</p>

                        <div className="flex justify-center gap-5">
                            <a href="https://www.facebook.com/profile.php?id=61578456292874" target="_blank" className="size-12 bg-[#F1F5F9] flex justify-center items-center rounded-full dark:bg-[#1E293B]">
                                <svg fill="#0000ffcc" viewBox="0 0 24 24" id="facebook" xmlns="http://www.w3.org/2000/svg" className="icon line-color w-6"><path id="primary" d="M14,7h4V3H14A5,5,0,0,0,9,8v3H6v4H9v6h4V15h3l1-4H13V8A1,1,0,0,1,14,7Z" ></path></svg>
                            </a>
                            <button onClick={sendWhatsAppMessage} className="size-12 bg-[#F1F5F9] flex justify-center items-center rounded-full cursor-pointer  dark:bg-[#1E293B]">
                                <MessageCircle className="w-5 h-5 text-green-500" />
                            </button>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}



