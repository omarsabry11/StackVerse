import roadmap from "../data/roadmap.json"

export function getCourse(id:number)
{
    const course = roadmap.courses.find(c=>c.id == id);
    return course;


}
