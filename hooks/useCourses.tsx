import roadmap from "../data/roadmap.json"

export default function useCourses() {
    const allCourses = roadmap.courses
    return { allCourses };
}
