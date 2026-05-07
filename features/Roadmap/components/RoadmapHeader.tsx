"use client";

import { motion } from "framer-motion";
import { Clock, CalendarDays, Timer, FlaskConical } from "lucide-react";
import InfoBadge from "./InfoBadge";
import { useTranslations } from "next-intl";
import { CourseRoadmap } from "../types/roadmap";

type Props = {
    course: CourseRoadmap,
    onOpenModal(c: CourseRoadmap): void
}
export default function RoadmapHeader({ course, onOpenModal }: Props) {
    const t = useTranslations("Courses");
    const t2 = useTranslations("Roadmap")

    return (
        <>
            <header className="md:ms-20">
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
                    className="w-full mb-10 bg-white shadow-md rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-6 dark:bg-[#0D1322]">
                    <div className="grid grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(4,auto)] text-content dark:text-contentDark">
                        {/* Weeks */}
                        <InfoBadge text={`${course.weeks} ${t2("weeks")}`}>
                            <CalendarDays className="w-5 h-5 text-main" />
                        </InfoBadge>

                        {/* Hours */}
                        <InfoBadge text={`${course.hours} ${t2("hours")}`}>
                            <Clock className="w-5 h-5 text-green-600" />
                        </InfoBadge>

                        {/* Sessions */}
                        <InfoBadge text={`2 ${t2("sessions")}`}>
                            <Timer className="w-5 h-5 text-purple-600  " />
                        </InfoBadge>

                        {/* Projects */}
                        <InfoBadge text={`${course.noOfProjects} ${t2("projects")}`}>
                            <FlaskConical className="w-5 h-5 text-pink-600" />
                        </InfoBadge>
                    </div>

                    {/* Enroll Button */}
                    <button
                        onClick={() => onOpenModal(course)}
                        className="bg-main text-white text-sm px-6 py-2 max-md:w-full rounded-md font-semibold  transition duration-300 cursor-pointer shadow-md hover:shadow-lg"
                    >
                        {t("enroll")}
                    </button>
                </motion.div>
            </header>

        </>


    );
}