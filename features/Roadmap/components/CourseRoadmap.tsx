"use client"
import { PhaseCard } from './PhaseCard'
import { CourseRoadmap as Course, Phase } from '../types/roadmap'
import { useEffect, useState } from 'react'
import RoadmapHeader from './RoadmapHeader'
import useModal from '@/hooks/useModal'
import FormModal from '@/components/common/FormModal'
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify'


export function CourseRoadmap({ course }: { course: Course }) {

    const [expandedPhaseId, setExpandedPhaseId] = useState<string | null>(course.phases[0].id)
    const { isOpen, setIsOpen } = useModal();

    function handleToggleExpand(phase: Phase) {
        setExpandedPhaseId(
            expandedPhaseId === phase.id ? null : phase.id,
        )
    }
    function handleOpenModal() {
        setIsOpen(true);
    }
    const router = useRouter()
    useEffect(() => {
        const handleBack = () => {
            router.push("#courses")
        };
        window.addEventListener("popstate", handleBack);
        return () => {
            window.removeEventListener("popstate", handleBack);
        };
    }, []);
    return (
        <section id="roadmap">
            <RoadmapHeader onOpenModal={handleOpenModal} course={course}></RoadmapHeader>
            {/* Form Modal */}
            {isOpen && <FormModal course={course} isOpen={isOpen} setIsOpen={setIsOpen}></FormModal>}

            <div>
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute strat-5.75 md:start-7.75 top-8 bottom-8 w-0.5 bg-gray-200 rounded-full dark:bg-gray-600" />

                    <div className="space-y-8 ps-14 md:ps-20">
                        {course.phases.map((phase: Phase, index: number) => {
                            return (
                                <PhaseCard
                                    key={phase.id}
                                    phase={phase}
                                    index={index}
                                    isExpanded={expandedPhaseId == phase.id}
                                    onToggleExpand={() => handleToggleExpand(phase)}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <ToastContainer
                autoClose={2500}
            ></ToastContainer>
        </section>

    )
}
