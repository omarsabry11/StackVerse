"use client"
import React from 'react'

export default function CourseImage({courseName}:{courseName:string}) {
    return (
        <div className='courseImage h-full w-full flex justify-center items-center text-white text-center'>
            <p className='text-2xl font-bold p-5'>{courseName}</p>
        </div>

    )
}
