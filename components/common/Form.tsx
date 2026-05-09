"use client"
import React from 'react'
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import Laoder from "@/components/ui/Laoder";
import { Course } from '@/types/Course';
import { useFormik } from 'formik';
import { CourseRoadmap } from '@/features/Roadmap/types/roadmap';

const LABEL_CLASSES = "mb-2 inline-block text-content font-semibold text-[14px] dark:text-contentDark";
const INPUT_CLASSES = "w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-main dark:text-contentDark dark:placeholder:text-contentDark dark:border-gray-700 ";

type FormValues = {
    name: string;
    phone: string;
    course: string;
    message: string;
}
type Props = {
    enroll: boolean;
    course: Course | CourseRoadmap |null;
}

export default function Form({ enroll, course }: Props) {
    const form = useRef<HTMLFormElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const t = useTranslations("Contact");
    const t2 = useTranslations("Courses")
    const courses = t2.raw("courses")
    const { locale: lang }: { locale: string, courseId: string } = useParams();

    async function sendMessage(values: FormValues) {
        // setIsLoading(true);
        // fetch("/api/contact", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(values),
        // }).then(() => {
        //     form.current?.reset();
        //     toast.success(t("bookedSuccessed"))
        // }).catch(() => {
        //     toast.success(t("bookedFailed"))
        // }).finally(() => {
        //     setIsLoading(false);
        // });

          toast.success(t("bookedSuccessed"))
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            course: course?.title || "Fundamentals of Programming with c++",
            message: ""
        },
        onSubmit: sendMessage
    })
    return (
        <form ref={form} onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
                <label htmlFor="name" className={LABEL_CLASSES}>{t("name.label")}*</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={formik.handleChange}
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
                    onChange={formik.handleChange}
                    className={INPUT_CLASSES}
                    required
                    placeholder={t("phone.placeholder")} />
            </div>
            <div>
                {/* Course */}
                <label htmlFor="course" className={LABEL_CLASSES}>{t("course.label")}*</label>
                {enroll ?
                    <input name='course' className={INPUT_CLASSES} readOnly type='text' value={course?.title || ""} /> :
                    <select
                        name="course"
                        id="course"
                        onChange={formik.handleChange}
                        className={`${INPUT_CLASSES} dark:bg-[#0D1322]`}
                    >
                        {courses.map((item: Course, index: number) => <option key={index} className="py-4" value={item.title}>{item.title}</option>)}
                    </select>}
            </div>
            {/* Message */}
            <div >
                <label htmlFor="msg" className={LABEL_CLASSES}>{t("message.label")}</label>
                <textarea
                    name="message"
                    id="msg"
                    onChange={formik.handleChange}
                    className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-main dark:text-contentDark dark:placeholder:text-contentDark dark:border-gray-700"
                    placeholder={t("message.placeholder")} />
            </div>
            <div>
                <button className="bg-main h-12  w-full text-white rounded-lg font-semibold cursor-pointer hover:shadow-lg hover:scale-[1.003] duration-150">
                    {isLoading ? <Laoder></Laoder> : <> {t("button")} <Send className="inline" /></>}
                </button>
                {/* <ToastContainer></ToastContainer> */}
            </div>
        </form>
    )
}
