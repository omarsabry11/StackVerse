"use client"
import React from 'react'
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify";
import Laoder from "@/components/ui/Laoder";
import { useCourseContext } from '@/contexts/CoursesContext';
import { Course } from '@/types/Course';
import { CourseRoadmap } from '@/features/Roadmap/types/roadmap';

const LABEL_CLASSES = "mb-2 inline-block text-content font-semibold text-[14px] dark:text-contentDark";
const INPUT_CLASSES = "w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-main dark:text-contentDark dark:placeholder:text-contentDark dark:border-gray-700 ";
export default function Form({ enroll }: { enroll: boolean }) {

    const form = useRef<HTMLFormElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const t = useTranslations("Contact");
    const t2 = useTranslations("Courses")
    const t3 = useTranslations("Roadmap")
    const courses = t2.raw("courses")
    const { enrolledCourse }: { enrolledCourse: CourseRoadmap | null } = useCourseContext();

    const { locale: lang }: { locale: string, courseId: string } = useParams();

    function sendData(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm('service_rys6bjr', 'template_7fi3ejh', form.current!, {
                publicKey: 'cG2v3tJaBfD6wJJio',
            })
            .then(
                () => {
                    toast.success(t("booedSuccessed"))
                    form.current!.reset();
                },
                (error) => {
                    toast.error(error.text)
                },
            ).finally(() => {
                setIsLoading(false);
            })
    };
    return (
        <form ref={form} onSubmit={sendData} className="space-y-5">
            {/* Name */}
            <div>
                <label htmlFor="name" className={LABEL_CLASSES}>{t("name.label")}*</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className={INPUT_CLASSES}
                    placeholder={t("name.placeholder")} />
            </div>
            <div>
                {/* Phone */}
                <label htmlFor="phone" className={LABEL_CLASSES}>{t("phone.label")}*</label>
                <input
                    dir={lang == "en" ? "ltr" : "rtl"}
                    type="tel"
                    name="phone"
                    id="phone"
                    className={INPUT_CLASSES}
                    required
                    placeholder={t("phone.placeholder")} />
            </div>
            <div>
                {/* Course */}
                <label htmlFor="course" className={LABEL_CLASSES}>{t("course.label")}*</label>
                {enroll ? <input name='course' className={INPUT_CLASSES} readOnly type='text' value={t3(enrolledCourse?.titleKey ?? "")} /> : <select
                    name="course"
                    id="course"
                    className={`${INPUT_CLASSES} dark:bg-[#0D1322]`}
                >
                    {courses.map((item: Course, index: number) => <option key={index} className="py-4" value={item.title}>{item.title}</option>)}
                </select>}
            </div>
            {/* Message */}
            <div >
                <label htmlFor="msg" className={LABEL_CLASSES}>{t("message.label")}</label>
                <textarea
                    name="msg"
                    id="msg"
                    className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-main dark:text-contentDark dark:placeholder:text-contentDark dark:border-gray-700"
                    placeholder={t("message.placeholder")} />
            </div>
            <div>
                <button className="bg-main h-12  w-full text-white rounded-lg font-semibold cursor-pointer hover:shadow-lg hover:scale-[1.003] duration-150">
                    {isLoading ? <Laoder></Laoder> : <> {t("button")} <Send className="inline" /></>}
                </button>
                <ToastContainer></ToastContainer>
            </div>
        </form>
    )
}
