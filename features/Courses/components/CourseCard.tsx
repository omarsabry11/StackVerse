import { Course } from "@/types/Course"
import { motion } from "framer-motion"
import { ArrowLeftIcon, ArrowRightIcon, ClockIcon, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


type Props = {
    index: number,
    course: Course,
    lang: string,
    t(a: string): string,
    onOpenModal(course: Course): void
}

export default function CourseCard({ index, course, lang, t, onOpenModal }: Props) {
    return (
        <motion.div
            key={index}
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
            className="shadow rounded-2xl flex flex-col h-full overflow-hidden group border-2 border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-lg"
        >
            <div className="h-56 relative overflow-hidden">
                <Image
                    src={course.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold mb-3 transition-colors group-hover:text-primary dark:text-white">
                    {course.title}
                </h3>

                <p className="text-content mb-6 grow dark:text-contentDark">
                    {course.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-content mb-8 dark:text-contentDark">
                    <div className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4" />
                        {course.duration}
                    </div>
                </div>

                <Link
                    href={`/${lang}/roadmap/${course.id}`}
                    className="w-full py-3 text-center rounded-xl font-semibold border border-gray-400 shadow mb-3 transition-transform duration-150 hover:shadow-lg hover:scale-[1.01] dark:text-contentDark"
                >
                    {t("viewDetails")}
                    <Info className="w-4 h-4 inline ms-1" />
                </Link>

                <button
                    onClick={() => onOpenModal(course)}
                    className="w-full py-3 text-center rounded-xl font-semibold bg-main text-white shadow transition-transform duration-150 hover:shadow-lg hover:scale-[1.01] cursor-pointer"
                >
                    {t("enroll")}

                    {lang == "en" ? (
                        <ArrowRightIcon className="w-4 h-4 inline ms-1" />
                    ) : (
                        <ArrowLeftIcon className="w-4 h-4 inline ms-1" />
                    )}
                </button>
            </div>
        </motion.div>
    )
}
