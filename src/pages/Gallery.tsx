import { useState } from 'react'
import ProjectLightbox from '../components/ui/ProjectLightbox'

import PortfolioCRT from '../components/ui/PortfolioCRT'

import crtFrame from '../assets/CRT_TV_Frame.png'
import crtScreen from '../assets/CRT_TV_Screen.png'

const projectPath = (filename: string) =>
  `${import.meta.env.BASE_URL}projects/${encodeURIComponent(filename)}`

type Project = {
  title: string
  description: string
  media: string
  type: 'image' | 'video'
  alt: string
  thumbnail?: string
}

const motionProjects: Project[] = [
  {
    title: 'Pinesbarrow Stopmotion Countdown',
    description: 'A countdown animation that focused on leveraging scanned graphics, textures, effects, and expressions in After Effects to create a hand-crafted stop-motion aesthetic.',
    media: projectPath('Pinesbarrow Countdown.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}/thumbnails/Pinesbarrow Countdown.jpg`
  },
  {
    title: 'Bloodbarrow Trailer',
    description: 'A mock trailer for a hypothetical horror show titled Bloodbarrow inspired by experimental analog horror projects and seeking to mimic CRT-TV and VHS style distortions and texture.',
    media: projectPath('Bloodbarrow Trailer.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}/thumbnails/Bloodbarrow Trailer.jpg`,
  },
  // {
  //   title: 'Ainulindale',
  //   description: 'Time-based visual experiment.',
  //   media: projectPath('Ainulindale Explainer Video.mp4'),
  //   type: 'video',
  //   alt: 'Motion graphics project',
  // },
  {
    title: 'NES Controller Advertisement',
    description: 'A short 3D animated advertisement for an NES controller making use of LCD screen texture and glitch effects.',
    media: projectPath('NES Controller Advertisement.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}/thumbnails/NES Controller Advertisement.jpg`,
  },
  {
    title: 'Windows 95 Styled Animated Joke',
    description: 'An animated question-response joke inspired by retro Windows 95 computer boot up sequences and OS interfaces.',
    media: projectPath('Windows95 Joke.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}/thumbnails/Windows95 Joke.jpg`,
  },
  {
    title: 'Luthen\'s Monologue',
    description: 'A kinetic typography project set to a portion of Luthen\'s monologue from season 1, episode 10 of Andor focused on creating interesting motion with primarily typographic elements.',
    media: projectPath('Kinetic Typography.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}/thumbnails/Kinetic Typography.jpg`,
  },
  {
    title: 'Lower Thirds Dragon',
    description: 'A vector based lower thirds animation featuring basic character rigging and animation to creating a dragon and fantasy aesthetic.',
    media: projectPath('Lower Thirds.mp4')  ,
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}/thumbnails/Lower Thirds.jpg`,
  },
  {
    title: 'Spotify Logo Animation',
    description: 'A 3D animation of the Spotify Logo that could be used for promotional advertisements.',
    media: projectPath('Spotify Logo Animation.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}/thumbnails/Spotify Logo Animation.jpg`,
  },
  {
    title: 'Exposure Balance Explainer',
    description: 'An animated illustration of the balance of aperture, shutter speed, and ISO that affect the exposure of an image, created as part of a larger explainer video on camera exposure as a whole.',
    media: projectPath('Exposure Balance.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}/thumbnails/Exposure Balance.jpg`,
  },
  {
    title: 'Camera Setup Title Card',
    description: 'An introductory title card and transition created for a video project focused on explaining how to set up a Sony A660 camera for video shooting. This graphic was designed with an alpha chanel to transition between video footage.',
    media: projectPath('Camera Explainer Transition.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}/thumbnails/Camera Explainer Transition.jpg`,
  },
  {
    title: 'Flipbook',
    description: 'A flipbook animation of a bouncing ball, designed to illustrate the concept of framerate for a large explainer video on camera exposure.',
    media: projectPath('Flipbook.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}/thumbnails/Flipbook.jpg`,
  },
  {
    title: 'Performative Ball with Tail Excercise',
    description: 'An excerise combining squash and stretch and wave principles in a hand-drawn medium with a goal of creating motivated action through a simple scene.',
    media: projectPath('Matthias.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}/thumbnails/Matthias.jpg`,
  },
  // {
  //   title: 'Hevel Explainer Animation',
  //   description: 'Time-based visual experiment.',
  //   media: projectPath('Hevel.mp4'),
  //   type: 'video',
  //   alt: 'Motion graphics project',
  // },
  // {
  //   title: 'Skinamarink Review',
  //   description: 'Time-based visual experiment.',
  //   media: projectPath('Skinamarink Review.mp4'),
  //   type: 'video',
  //   alt: 'Motion graphics project',
  // },
  // {
  //   title: 'Sword in the Stone',
  //   description: 'Time-based visual experiment.',
  //   media: projectPath('Sword in the Stone.mp4'),
  //   type: 'video',
  //   alt: 'Motion graphics project',
  // },
]

const threeDProjects: Project[] = [
  {
    title: 'AEE Warning Poster 1',
    description: 'A poster graphic designed as a set featuring an NES controller modeled from reference and styled with toon shaders as an analog horror inspired warning poster that mixed 3D and 2D elements.',
    media: projectPath('AAE Warning 1.jpg'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: 'AEE Warning Poster 2',
    description: 'A poster graphic designed as a set featuring a kitchen pan modeled from reference and styled with toon shaders as an analog horror inspired warning poster that mixed 3D and 2D elements.',
    media: projectPath('AAE Warning 2.jpg'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: 'AEE Warning Poster 3',
    description: 'A poster graphic designed as a set featuring an office desk modeled from reference and styled with toon shaders as an analog horror inspired warning poster that mixed 3D and 2D elements.',
    media: projectPath('AAE Warning 3.jpg'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: 'Castle 1',
    description: 'A castle landscape scene created in Maya.',
    media: projectPath('Castle 01.png'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: 'Castle 2',
    description: 'A close up shot of a castle landscape scene created in Maya.',
    media: projectPath('Castle 02.png'),
    type: 'image',
    alt: '3D artwork',
  },
]

const illustrationProjects: Project[] = [
  {
    title: 'Polaroid Illustration',
    description: 'A vector based illustration of a polariod camera designed using Adobe Illustrator.',
    media: projectPath('Polaroid Illustration.png'),
    type: 'image',
    alt: 'Illustration',
  },
  {
    title: 'Self-Portrait',
    description: 'A self-portrait illustration inspired by the artstyle used by Studio Ghibli.',
    media: projectPath('GhibliStyleSelfPortrait.png'),
    type: 'image',
    alt: 'Illustration',
  },
  // {
  //   title: 'Chess Club Poster',
  //   description: 'Experimental graphic illustration.',
  //   media: projectPath('Chess Club Poster v3.pdf'),
  //   type: 'image',
  //   alt: 'Illustration',
  // },
]

const allProjects = [
  ...motionProjects,
  ...threeDProjects,
  ...illustrationProjects,
]

function ProjectSection({
  id,
  title,
  projects,
  crtFrame,
  crtScreen,
  onOpen,
}: {
  id: string
  title: string
  projects: Project[]
  crtFrame: string
  crtScreen: string
  onOpen: (project: Project) => void
}) {
  return (
    <section id={id} className="mb-20">
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#777064]" />

        <h2 className="font-rounded text-[18px] font-bold tracking-[0.08em] text-[#332d27]">
          {title}
        </h2>

        <div className="h-px flex-1 bg-[#777064]" />
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <PortfolioCRT
            key={project.title}
            {...project}
            crtFrame={crtFrame}
            crtScreen={crtScreen}
            onOpen={() => onOpen(project)}
          />
        ))}
      </div>
    </section>
  )
}

function Gallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#dedcc4]">
      <div className="mx-auto w-full max-w-[1800px] px-6 py-10 md:px-10 lg:px-16">
        <div className="min-w-0 px-6 py-12 sm:px-10 lg:px-14">
          <ProjectSection
            id="motion"
            title="MOTION / TIME-BASED WORK"
            projects={motionProjects}
            crtFrame={crtFrame}
            crtScreen={crtScreen}
            onOpen={setSelectedProject}
          />

          <ProjectSection
            id="three-dimensional"
            title="THREE-DIMENSIONAL WORK"
            projects={threeDProjects}
            crtFrame={crtFrame}
            crtScreen={crtScreen}
            onOpen={setSelectedProject}
          />

          <ProjectSection
            id="illustration"
            title="ILLUSTRATION / GRAPHIC WORK"
            projects={illustrationProjects}
            crtFrame={crtFrame}
            crtScreen={crtScreen}
            onOpen={setSelectedProject}
          />
        </div>
      </div>

      {selectedProject && (
        <ProjectLightbox
          project={selectedProject}
          projects={allProjects}
          onClose={() => setSelectedProject(null)}
          onNavigate={setSelectedProject}
        />
      )}
    </main>
  )
}

export default Gallery