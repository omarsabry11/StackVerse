export interface CourseRoadmap {
  id: number
  title: string,
  titleKey: string,
  weeks: number,
  hours: number,
  noOfProjects: number,
  phases: Phase[]
}

export interface Phase {
  id: string
  title: string
  color: Color
  topics: Topic[]
}

export interface Color {
  bg: string
  text: string
  border: string
  lightBg: string
}

export interface Topic {
  id: string
  title: string
}

export interface PhaseCardProps {
  phase: Phase
  index: number
  isExpanded: boolean
  onToggleExpand: () => void
}

