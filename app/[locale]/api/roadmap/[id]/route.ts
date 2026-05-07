import { NextResponse } from "next/server";
import roadmap from "../../../../../data/roadmap.json"


export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    const numericId = Number(id);
    if (isNaN(numericId)) {
        return NextResponse.json(
            { message: "Invalid ID" },
            { status: 400 }
        );
    }
    const course = roadmap.courses.find((course: any) => course.id == numericId);
    if (!course) {
        return NextResponse.json(
            { message: "Course is not found" },
            { status: 404 }
        )
    }

    return NextResponse.json(course);
}