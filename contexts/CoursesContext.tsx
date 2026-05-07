"use client"
import { CourseRoadmap } from "@/features/Roadmap/types/roadmap";
import { createContext, useContext, useState } from "react";


type CourseContextType = {
    enrolledCourse: CourseRoadmap | null;
    setEnrolledCourse: React.Dispatch<React.SetStateAction<CourseRoadmap | null>>;
};

type Props = {
    children: React.ReactNode;
};

export const CourseContext = createContext<CourseContextType | null>(null);


export default function CourseProvider({ children }: Props) {

    const [enrolledCourse, setEnrolledCourse] = useState<CourseRoadmap | null>(null)
    return <CourseContext.Provider value={{ enrolledCourse, setEnrolledCourse }}>
        {children}
    </CourseContext.Provider>
}

export function useCourseContext() {
    const context = useContext(CourseContext);
    if (!context) {
        throw new Error("useCourseContext must be used within CourseProvider");
    }
    return context;
}


