export interface Project {
  id: string
  title: string
  category: string
  year: string
  description: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Project One',
    category: 'Graphic Design',
    year: '2026',
    description: 'A short description of the project.',
  },
  {
    id: 'project-two',
    title: 'Project Two',
    category: 'Web Design',
    year: '2026',
    description: 'A short description of the project.',
  },
]