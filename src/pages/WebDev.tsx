
import { useState } from 'react'

type Project = {
  id: string
  name: string
  category: string
  status: string
  summary: string
  role: string
  technologies: string[]
  engineeringFocus: string
  designFocus: string
  challenge: string
  github?: string
  demo?: string

  // Optional project screenshot
  screenshot?: {
    src: string
    alt: string
    caption?: string
  }
}

const projectPathImage = (filename: string) =>
  `${import.meta.env.BASE_URL}media/images/${encodeURIComponent(filename)}`

const projects: Project[] = [
  {
    id: '01',
    name: 'SecurePass',
    category: 'FULL-STACK APPLICATION',
    status: 'INTERNSHIP PROJECT',
    summary:
      'A full-stack password manager web app developed from scratch during an internship at Belvista Software. Designed for internal company use, but with a scalable design that can be further developed as a public-facing product in the future.',
    role: 'Software development intern',
    technologies: ['React', 'Vite', 'Node.js', 'Microsoft SQL Server', 'Amazon Cognito', 'Web Crypto API'],
    engineeringFocus:
      'Full-stack application development, secure credential management, database design, and the coordination of frontend and backend functionality.',
    designFocus:
      'Presenting sensitive information in a clear, usable interface while keeping the core password-management workflow straightforward.',
    challenge:
      'Architecting a secure system usign AES-256 encryption, hashing, and salting to protect sensitive data while allowing teams of users to share credentials with precise access control and auditability.',
  },
  {
    id: '02',
    name: 'SIDA Website',
    category: 'FULL-STACK WEB PLATFORM',
    status: 'IN DEVELOPMENT',
    summary:
      'A website for the Student Independent Designers and Artists club at Houghton University, connecting clients and campus departments with student creatives for commission opportunities.',
    role: 'Club co-founder and website manager',
    technologies: ['React', 'Vite','NestJS', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    engineeringFocus:
      'A separated frontend and API, structured member and project data, and a commission-request workflow designed for future maintainability.',
    designFocus:
      'Making it easy to discover student work and submit commission requests while giving the club a maintainable platform for long-term use.',
    challenge:
      'Building a sustainable system with limited resources that can be handed off to future club leaders without requiring full understanding of every implementation detail.',
    github: 'https://github.com/rileyvanheukelum/SIDA',
  },
  {
    id: '03',
    name: 'Personal Portfolio',
    category: 'RESPONSIVE WEB DESIGN',
    status: 'LIVE PROJECT',
    summary:
      'A custom portfolio that combines software development, interface design, graphic design, and motion design in a cassette-futurist visual system.',
    role: 'Designer and developer',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Formspree'],
    engineeringFocus:
      'Reusable components, responsive layouts, custom SVG assets, client-side routing, and deployment through GitHub Pages.',
    designFocus:
      'A distinctive retro-computing interface built around custom rocker switches and buttons, layered artwork, CRT-inspired media frames, and responsive typography.',
    challenge:
      'Translating highly specific visual designs into a responsive interface without sacrificing usability, loading performance, or maintainability.',
    github: 'https://github.com/rileyvanheukelum/DigitalPortfolio',
    demo: 'https://www.rileyvanheukelum.com',
    screenshot: {
        src: projectPathImage('Portfolio Screenshot.png'),
        alt: 'Screenshot of the Digital Portfolio website',
        caption: 'The Digital Portfolio interface.',
    },
  },
  {
    id: '04',
    name: 'Fundamental Computer Skills Tutor',
    category: 'EDUCATIONAL WEB APPLICATION',
    status: 'SENIOR CAPSTONE',
    summary:
      'A team-built learning application that teaches fundamental computer skills through interactive lessons in a simulated Windows 11 desktop environment.',
    role: 'Collaborative capstone project',
    technologies: ['React', 'Vite', 'Node.js', 'Express.js', 'Oracle Autonomous Database', 'Oracle Storage Bucket', 'Google Gemini API'],
    engineeringFocus:
      'Building interactive browser-based experiences that simulate desktop computer workflows and support guided learning.',
    designFocus:
      'Using a familiar desktop environment as the learning interface, helping users practice computer skills in a contextual setting.',
    challenge:
      'Focused particularly on the database design and implementation, designing the UI layout and graphics, and implementing a decentralized event-bus notification system and lesson runner logic for tracking user actions in the interactive desktop environment.',
    github: 'https://github.com/rileyvanheukelum/FundamentalComputerSkills',
    screenshot: {
        src: projectPathImage('FCST Screenshot.jpg'),
        alt: 'Screenshot of the Fundamental Computer Skills Tutor website',
        caption: 'The Fundamental Computer Skills Tutor website interface.',
    },
  },
  {
    id: '05',
    name: 'Web VR Path Prediction Research',
    category: 'WEB VR / RESEARCH',
    status: 'RESEARCH PROJECT',
    summary:
      'A browser-based VR experience developed with the A-Frame WebXR framework to collect research data for point-of-interest-aware path-prediction machine learning models. Intended for potential use in "VR redirected walking controllers.',
    role: 'Collaborative research project',
    technologies: ['A-Frame', 'Render.com', 'Supabase', 'Meta Quest 3 HMD'],
    engineeringFocus:
      'Creating a 3D navigatable browser-based virtual environment for research data collection, with interactions and navigation relevant to the study.',
    designFocus:
      'Presenting a spatial experience that lets participants explore several simple VR environments while collecting data on their movement and positional relationship to points of interest in the environment.',
    challenge:
      'Designing a simple, rapidly deployable VR experience to collect goal-directed walking data for research purposes, while ensuring the experience is comfortable and accessible for participants with varying levels of VR experience.',
    github: 'https://github.com/rileyvanheukelum/POIPathPrediction',
    screenshot: {
        src: projectPathImage('VR App Screenshot.png'),
        alt: 'Screenshot of the web VR path prediction website',
        caption: 'The web VR path prediction website interface.',
    },
  },
]

function WebDev() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <main className="min-w-0 bg-[#dedcc4] px-4 py-8 text-[#302b27] sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        {/* Page heading */}
        <header className="mb-8 border-b-2 border-[#5c534b] pb-6 sm:mb-10">
          <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#756a5d] sm:text-sm">
            SYSTEM DIRECTORY / 03
          </p>

          <h1 className="font-paroxysm text-4xl leading-none tracking-tight sm:text-5xl lg:text-7xl">
            WEB DEVELOPMENT
          </h1>

          <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-sm leading-7 sm:text-base">
              A collection of applications, interactive systems, and web
              experiences exploring the intersection of software engineering
              and interface design.
            </p>

            <p className="font-mono text-xs leading-5 text-[#756a5d]">
              PROJECTS: {String(projects.length).padStart(2, '0')}
              <br />
              FOCUS: ENGINEERING + DESIGN
            </p>
          </div>
        </header>

        {/* Project index */}
        <nav
          aria-label="Project index"
          className="mb-8 flex flex-wrap gap-2"
        >
          {projects.map((project) => (
            <a
              key={project.id}
              href={`#project-${project.id}`}
              className="border border-[#8c8174] px-3 py-2 font-mono text-xs transition-colors hover:bg-[#f0edda] hover:text-[#dedcc4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#302b27]"
            >
              {project.id} / {project.name}
            </a>
          ))}
        </nav>

        {/* Project directory */}
        <section
          aria-label="Web development projects"
          className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-7"
        >
          {projects.map((project) => {
            const isExpanded = expandedProject === project.id

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="min-w-0 scroll-mt-6 overflow-hidden border border-[#8c8174] bg-[#f0edda] shadow-[4px_4px_0_#b7b19a]"
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-3 border-b border-[#b7b19a] bg-[#302b27] p-4 text-[#dedcc4] sm:p-5">
                  <div className="min-w-0">
                    <p className="mb-2 font-mono text-[10px] tracking-[0.16em] text-[#c0b69f] sm:text-xs">
                      PROJECT_{project.id}
                    </p>

                    <h2 className="font-paroxysm text-xl leading-tight sm:text-2xl">
                      {project.name}
                    </h2>
                  </div>

                  <span className="shrink-0 border border-[#8c8174] px-2 py-1 font-mono text-[9px] leading-4 text-[#dedcc4] sm:text-[10px]">
                    {project.id}
                  </span>
                </div>

                {/* Optional project screenshot */}
                {project.screenshot && (
                <figure className="border-b border-[#b7b19a] bg-[#e3dfca]">
                    <img
                    src={project.screenshot.src}
                    alt={project.screenshot.alt}
                    loading="lazy"
                    decoding="async"
                    className="
                        block
                        h-auto
                        max-h-[340px]
                        w-full
                        object-contain
                        object-center
                    "
                    />

                    {project.screenshot.caption && (
                    <figcaption
                        className="
                        border-t border-[#d1cbb5]
                        px-4 py-2
                        font-mono text-[10px]
                        leading-5 text-[#756a5d]
                        sm:px-5
                        "
                    >
                        {project.screenshot.caption}
                    </figcaption>
                    )}
                </figure>
                )}

                <div className="space-y-5 p-4 sm:p-5">
                  <div>
                    <p className="mb-2 font-mono text-[10px] tracking-[0.12em] text-[#756a5d]">
                      {project.category}
                    </p>

                    <p className="text-sm leading-6 sm:text-base sm:leading-7">
                      {project.summary}
                    </p>
                  </div>

                  {/* Status and role */}
                  <div className="grid grid-cols-1 gap-3 border-y border-[#d1cbb5] py-3 sm:grid-cols-2">
                    <div>
                      <p className="mb-1 font-mono text-[10px] text-[#756a5d]">
                        STATUS
                      </p>
                      <p className="text-xs font-bold tracking-wide">
                        {project.status}
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 font-mono text-[10px] text-[#756a5d]">
                        ROLE
                      </p>
                      <p className="text-xs leading-5">{project.role}</p>
                    </div>
                  </div>

                  {/* Technology stack */}
                  <div>
                    <p className="mb-2 font-mono text-[10px] tracking-[0.12em] text-[#756a5d]">
                      TECHNOLOGY STACK
                    </p>

                    {project.technologies.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="border border-[#a69b83] bg-[#e3dfca] px-2 py-1 font-mono text-[10px] sm:text-xs"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs italic text-[#756a5d]">
                        Stack details to be added.
                      </p>
                    )}
                  </div>

                  {/* Expandable technical case study */}
                  <div className="border-t border-[#d1cbb5] pt-4">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setExpandedProject(isExpanded ? null : project.id)
                      }
                      className="flex w-full items-center justify-between gap-3 text-left font-mono text-xs font-bold tracking-wide hover:text-[#756a5d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#302b27]"
                    >
                      <span>
                        {isExpanded
                          ? 'CLOSE TECHNICAL NOTES'
                          : 'VIEW TECHNICAL NOTES'}
                      </span>
                      <span aria-hidden="true">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="mt-4 space-y-4">
                        <div>
                          <h3 className="mb-1 font-mono text-[10px] font-bold tracking-wide">
                            ENGINEERING
                          </h3>
                          <p className="text-sm leading-6 text-[#51483f]">
                            {project.engineeringFocus}
                          </p>
                        </div>

                        <div>
                          <h3 className="mb-1 font-mono text-[10px] font-bold tracking-wide">
                            DESIGN
                          </h3>
                          <p className="text-sm leading-6 text-[#51483f]">
                            {project.designFocus}
                          </p>
                        </div>

                        <div className="border-l-2 border-[#8c8174] pl-3">
                          <h3 className="mb-1 font-mono text-[10px] font-bold tracking-wide">
                            CHALLENGE / REFLECTION
                          </h3>
                          <p className="text-sm leading-6 text-[#51483f]">
                            {project.challenge}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project links */}
                  {(project.github || project.demo) && (
                    <div className="flex flex-wrap gap-3 border-t border-[#d1cbb5] pt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="border border-[#5c534b] px-3 py-2 font-mono text-[10px] font-bold hover:bg-[#302b27] hover:text-[#dedcc4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#302b27]"
                        >
                          GITHUB REPOSITORY ↗
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="border border-[#5c534b] px-3 py-2 font-mono text-[10px] font-bold hover:bg-[#302b27] hover:text-[#dedcc4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#302b27]"
                        >
                          LIVE SITE ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </section>

        {/* Closing note */}
        <footer className="mt-10 border-t-2 border-[#5c534b] pt-5 sm:mt-14">
          <p className="font-mono text-[10px] tracking-[0.15em] text-[#756a5d]">
            END OF DIRECTORY // MORE PROJECTS TO COME
          </p>
        </footer>
      </div>
    </main>
  )
}

export default WebDev
