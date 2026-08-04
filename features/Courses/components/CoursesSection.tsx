"use client"
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import FormModal from '@/components/common/FormModal'
import useModal from '@/hooks/useModal'
import CourseCard from './CourseCard'
import useCourses from '@/hooks/useCourses'
import { Course } from '@/types/Course'
import { CourseRoadmap } from '@/features/Roadmap/types/roadmap'
import { useState } from 'react'


export function CoursesSection() {

    const t = useTranslations("Courses");
   
    const COURSES: Course[] = [
        {
            id: 1,
            title: t("fundamentals.title"),
            description: t("fundamentals.desc"),
            duration: t("fundamentals.duration"),
            imageUrl: "/assets/images/Courses/CPP.webp"
        },
        {
            id: 2,
            title: t("frontend.title"),
            description: t("frontend.desc"),
            duration: t("frontend.duration"),
            imageUrl: "/assets/images/Courses/Frontend.webp"
        },
        {
            id: 3,
            title: t("reactNext.title"),
            description: t("reactNext.desc"),
            duration: t("reactNext.duration"),
            imageUrl: "/assets/images/Courses/ReactNext.webp"
        },
        {
            id: 4,
            title: t("python.title"),
            description: t("python.desc"),
            duration: t("python.duration"),
            imageUrl: "/assets/images/Courses/Python.webp"
        },
        {
            id: 5,
            title: t("backend.title"),
            description: t("backend.desc"),
            duration: t("backend.duration"),
            imageUrl: "/assets/images/Courses/Nodejs.webp"
        },
    ]

    const pathName = usePathname();
    const lang = pathName.split("").slice(1, 3).join("");
    const { isOpen, setIsOpen } = useModal();
    const { allCourses } = useCourses();
    const [ selectedCourse, setSelectedCourse ] = useState<Course|null>(null);

    function handleOpenModal(course: Course) {
        const selectedCourse: CourseRoadmap | undefined = allCourses.find(c => c.id == course.id)
        if (!selectedCourse) return
        setIsOpen(true);
        setSelectedCourse(course)
    }
    return (
        <section
            id="courses"
            className="bg-[#F8FAFC] dark:bg-[#0D1322]"
        >
            <FormModal course={selectedCourse} isOpen={isOpen} setIsOpen={setIsOpen}></FormModal>
            <div className="myContainer">
                <motion.header
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <h2 className='section_title w-fit mx-auto relative text-4xl font-bold text-[#0f172a] dark:text-white'>{t("title")}</h2>

                </motion.header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {COURSES.map((course, index) => (
                        <CourseCard
                            onOpenModal={handleOpenModal}
                            key={course.id}
                            index={index}
                            course={course}
                            lang={lang}
                            t={t}
                        ></CourseCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
