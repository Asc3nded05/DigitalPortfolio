import { useEffect } from 'react'

interface Project {
  title: string
  description: string
  media: string
  type: 'image' | 'video'
  alt: string
  thumbnail?: string
}

interface ProjectLightboxProps {
  project: Project
  projects: Project[]
  onClose: () => void
  onNavigate: (project: Project) => void
}

function ProjectLightbox({
  project,
  projects,
  onClose,
  onNavigate,
}: ProjectLightboxProps) {
  const currentIndex = projects.findIndex(
    (item) => item.title === project.title
  )

  const previousProject =
    projects[
      (currentIndex - 1 + projects.length) % projects.length
    ]

  const nextProject =
    projects[(currentIndex + 1) % projects.length]

  const handlePrevious = () => {
    onNavigate(previousProject)
  }

  const handleNext = () => {
    onNavigate(nextProject)
  }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
            onNavigate(previousProject)
            }

            if (event.key === 'ArrowRight') {
            onNavigate(nextProject)
            }

            if (event.key === 'Escape') {
            onClose()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [previousProject, nextProject, onNavigate, onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171512]/90 p-6"
      onClick={onClose}
    >
      {/* Previous button */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          handlePrevious()
        }}
        className="absolute left-4 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#dedcc4] bg-[#302b27] font-rounded text-2xl text-[#dedcc4] transition-transform hover:scale-105 sm:left-6"
        aria-label={`Previous project: ${previousProject.title}`}
      >
        ←
      </button>

      {/* Project */}
      <div
        className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Project title */}
        <h2 className="mb-4 max-w-[80vw] text-center font-rounded text-lg font-bold text-[#dedcc4]">
          {project.title}
        </h2>

        {/* Media */}
        {project.type === 'image' ? (
          <img
            src={project.media}
            alt={project.alt}
            className="max-h-[75vh] max-w-[80vw] object-contain"
          />
        ) : (
          <video
            key={project.media}
            src={project.media}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="max-h-[75vh] max-w-[80vw]"
          />
        )}

        {/* Project counter */}
        <p className="mt-4 font-rounded text-sm text-[#bdb5a3]">
          {currentIndex + 1} / {projects.length}
        </p>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#dedcc4] bg-[#302b27] font-rounded text-sm text-[#dedcc4] transition-transform hover:scale-105"
          aria-label="Close expanded project"
        >
          ×
        </button>
      </div>

      {/* Next button */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          handleNext()
        }}
        className="absolute right-4 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#dedcc4] bg-[#302b27] font-rounded text-2xl text-[#dedcc4] transition-transform hover:scale-105 sm:right-6"
        aria-label={`Next project: ${nextProject.title}`}
      >
        →
      </button>
    </div>
  )
}

export default ProjectLightbox