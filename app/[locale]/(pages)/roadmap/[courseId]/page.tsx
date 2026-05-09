import { CourseRoadmap } from '@/features/Roadmap/components/CourseRoadmap'
import roadmap from "../../../../../data/roadmap.json"
import { notFound } from 'next/navigation';
import { CourseRoadmap as Course } from '@/features/Roadmap/types/roadmap';
export default async function Roadmap({
  params,
}: {
  params: { courseId: string };
}) {

  const { courseId } = await params;
  const course = roadmap.courses.find((course: Course) => course.id == Number(courseId));

  if (!course) {
    return notFound();
  }


  return (
    <section id='roadmap' className='overflow-auto pt-16'>
      <header className='bg-gray-100 py-10 flex justify-center text-center items-center dark:bg-[#0A0F1A] '>
        <h2 className='text-4xl lg:text-5xl font-bold leading-11 lg:leading-14 text-black dark:text-white'>{course?.title} <br /> <span className='text-main text-3xl lg:text-4xl dark:text-secondary'>Course Roadmap</span> </h2>
      </header>
      <div className='dark:bg-[#0D1322]'>
        <div className='myContainer '>
          <CourseRoadmap course={course} />
        </div>
      </div>
    </section>
  )
}
