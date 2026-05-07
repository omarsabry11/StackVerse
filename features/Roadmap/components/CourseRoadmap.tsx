"use client"
import { PhaseCard } from './PhaseCard'
import { Phase } from '../types/roadmap'
import { useState } from 'react'
import RoadmapHeader from './RoadmapHeader'
import useModal from '@/hooks/useModal'
import FormModal from '@/components/common/FormModal'
import { useCourseContext } from '@/contexts/CoursesContext'

export function CourseRoadmap({ course }: { course: any }) {

    const [expandedPhaseId, setExpandedPhaseId] = useState<string | null>(course.phases[0].id)
    const { isOpen, setIsOpen } = useModal();
    const { setEnrolledCourse } = useCourseContext();


    function handleToggleExpand(phase: Phase) {
        setExpandedPhaseId(
            expandedPhaseId === phase.id ? null : phase.id,
        )
    }

    function handleOpenModal(selectedCourse: any) {
        setIsOpen(true);
        setEnrolledCourse(selectedCourse)
    }
    return (
        <section id="roadmap">
            <RoadmapHeader onOpenModal={handleOpenModal} course={course}></RoadmapHeader>
            {/* Form Modal */}
            {isOpen && <FormModal isOpen={isOpen} setIsOpen={setIsOpen}></FormModal>}

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
        </section>
    )
}
