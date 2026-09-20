import { useState } from 'react'
import ProjectLightbox from '../components/ui/ProjectLightbox'

import PortfolioCRT from '../components/ui/PortfolioCRT'

import galleryScreen from '../assets/Gallery Screen.svg'

const projectPathFullVideo = (filename: string) =>
  `${import.meta.env.BASE_URL}media/videos/full/${encodeURIComponent(filename)}`
const projectPathPreviewVideo = (filename: string) =>
  `${import.meta.env.BASE_URL}media/videos/preview/${encodeURIComponent(filename)}`
const projectPathImage = (filename: string) =>
  `${import.meta.env.BASE_URL}media/images/${encodeURIComponent(filename)}`

type Project = {
  title: string
  description: string
  media: string
  preview?: string
  type: 'image' | 'video'
  alt: string
  thumbnail?: string
}

const motionProjects: Project[] = [
  {
    title: 'Pinesbarrow Stopmotion Countdown',
    description: 'A countdown animation that focused on leveraging scanned graphics, textures, and effects to create a stop-motion aesthetic. Accepted into the the Houghton University 36th Annual Juried Student Exhibition.',
    media: projectPathFullVideo('Pinesbarrow Countdown_Full.mp4'),
    preview: projectPathPreviewVideo('Pinesbarrow Countdown_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Pinesbarrow Countdown.jpg`
  },
  {
    title: 'Bloodbarrow Trailer',
    description: 'A mock trailer for a hypothetical horror show titled Bloodbarrow inspired by experimental analog horror projects and seeking to mimic CRT-TV and VHS style distortions and texture.',
    media: projectPathFullVideo('Bloodbarrow Trailer_Full.mp4'),
    preview: projectPathPreviewVideo('Bloodbarrow Trailer_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Bloodbarrow Trailer.jpg`,
  },
  {
    title: 'Ainulindale',
    description: 'A brief animated recounting of the creation of the world from J.R.R. Tolkien\'s The Silmarillion. Winner of the Ben Frank and Jean Moss Award for artistic excellence in the Houghton University 36th Annual Juried Student Exhibition.',
    media: projectPathFullVideo('Ainulindale Explainer Video_Full.mp4'),
    preview: projectPathPreviewVideo('Ainulindale Explainer Video_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Ainulindale Explainer Video.jpg`,
  },
  {
    title: 'NES Controller Advertisement',
    description: 'A short 3D animated advertisement for an NES controller making use of LCD screen texture and glitch effects.',
    media: projectPathFullVideo('NES Controller Advertisement_Full.mp4'),
    preview: projectPathPreviewVideo('NES Controller Advertisement_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/NES Controller Advertisement.jpg`,
  },
  {
    title: 'Spotify Logo Animation',
    description: 'A 3D animation of the Spotify Logo that could be used for promotional advertisements.',
    media: projectPathFullVideo('Spotify Logo Animation_Full.mp4'),
    preview: projectPathPreviewVideo('Spotify Logo Animation_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Spotify Logo Animation.jpg`,
  },
  {
    title: 'Exposure Balance Explainer',
    description: 'An animated illustration of the balance of aperture, shutter speed, and ISO that affect the exposure of an image, created as part of a larger explainer video on camera exposure as a whole.',
    media: projectPathFullVideo('Exposure Balance_Full.mp4'),
    preview: projectPathPreviewVideo('Exposure Balance_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Exposure Balance.jpg`,
  },
    {
    title: 'Windows 95 Styled Animated Joke',
    description: 'An animated question-response joke inspired by retro Windows 95 computer boot up sequences and OS interfaces.',
    media: projectPathFullVideo('Windows95 Joke_Full.mp4'),
    preview: projectPathPreviewVideo('Windows95 Joke_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Windows95 Joke.jpg`,
  },
  {
    title: 'Luthen\'s Monologue',
    description: 'A kinetic typography project set to a portion of Luthen\'s monologue from season 1, episode 10 of Andor focused on creating interesting motion with primarily typographic elements.',
    media: projectPathFullVideo('Kinetic Typography_Full.mp4'),
    preview: projectPathPreviewVideo('Kinetic Typography_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Kinetic Typography.jpg`,
  },
  {
    title: 'Lower Thirds Dragon',
    description: 'A vector based lower thirds animation featuring basic character rigging and animation to creating a dragon and fantasy aesthetic.',
    media: projectPathFullVideo('Lower Thirds_Full.mp4'),
    preview: projectPathPreviewVideo('Lower Thirds_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Lower Thirds.jpg`,
  },
  {
    title: 'Hevel Explainer Animation',
    description: 'A research-based animated explainer exploring the Hebrew word "Hevel" and its meaning in the book of Ecclesiastes.',
    media: projectPathFullVideo('Hevel_Full.mp4'),
    preview: projectPathPreviewVideo('Hevel_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Hevel.jpg`,
  },
  {
    title: 'Exposure Triangle Title Card',
    description: 'An introductory title card created for a video project focused on explaining the exposure triangle in photography.',
    media: projectPathFullVideo('Exposure Triangle_Full.mp4'),
    preview: projectPathPreviewVideo('Exposure Triangle_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Exposure Triangle.jpg`,
  },
  {
    title: 'Camera Setup Title Card',
    description: 'An introductory title card created for a video project focused on explaining how to set up a Sony A660 camera for video shooting. This graphic was designed with an alpha chanel to transition between video footage.',
    media: projectPathFullVideo('Camera Explainer Transition_Full.mp4'),
    preview: projectPathPreviewVideo('Camera Explainer Transition_Preview.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Camera Explainer Transition.jpg`,
  },
  // {
  //   title: 'Skinamarink Review',
  //   description: 'A short video review of the experimental indie horror film Skinamarink that focused on creating a VHS and CRt aesthetic to match the film\'s style and tone.',
  //   media: projectPathFullVideo('Skinamarink Review_Full.mp4'),
  //   preview: projectPathPreviewVideo('Skinamarink Review_Preview.mp4'),
  //   type: 'video',
  //   alt: 'Motion graphics project',
  //   thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Skinamarink Review.jpg`,
  // },
]

const threeDProjects: Project[] = [
  {
    title: 'AEE Warning Poster 1',
    description: 'A poster graphic designed as a set featuring an NES controller modeled from reference and styled with toon shaders as an analog horror inspired warning poster that mixed 3D and 2D elements.',
    media: projectPathImage('AAE Warning 1.jpg'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: 'AEE Warning Poster 2',
    description: 'A poster graphic designed as a set featuring a kitchen pan modeled from reference and styled with toon shaders as an analog horror inspired warning poster that mixed 3D and 2D elements.',
    media: projectPathImage('AAE Warning 2.jpg'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: 'AEE Warning Poster 3',
    description: 'A poster graphic designed as a set featuring an office desk modeled from reference and styled with toon shaders as an analog horror inspired warning poster that mixed 3D and 2D elements.',
    media: projectPathImage('AAE Warning 3.jpg'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: 'Castle 1',
    description: 'A castle landscape scene created in Maya.',
    media: projectPathImage('Castle 01.png'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: 'Castle 2',
    description: 'A close up shot of a castle landscape scene created in Maya.',
    media: projectPathImage('Castle 02.png'),
    type: 'image',
    alt: '3D artwork',
  },
]

const illustrationProjects: Project[] = [
    {
    title: 'Stained Glass Warlock',
    description: 'A geometric stained glass style illustration of a warlock character designed using Adobe Photoshop.',
    media: projectPathImage('Stained Glass Warlock.jpg'),
    type: 'image',
    alt: 'Illustration',
  },
  {
    title: 'Polaroid Illustration',
    description: 'A vector based illustration of a polaroid camera designed using Adobe Illustrator.',
    media: projectPathImage('Polaroid Illustration.png'),
    type: 'image',
    alt: 'Illustration',
  },
  {
    title: 'Self-Portrait',
    description: 'A self-portrait illustration inspired by the artstyle used by Studio Ghibli.',
    media: projectPathImage('GhibliStyleSelfPortrait.png'),
    type: 'image',
    alt: 'Illustration',
  },
  {
    title: 'Chess Club Poster',
    description: 'Experimental graphic illustration.',
    media: projectPathImage('Chess Club Poster.png'),
    type: 'image',
    alt: 'Illustration',
  },
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
  onOpen,
}: {
  id: string
  title: string
  projects: Project[]
  crtFrame: string
  onOpen: (project: Project) => void
}) {
  return (
    <section id={id} className="mb-20">
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#777064]" />

        <h2 className="font-paroxysm text-[18px] tracking-[0.1em] text-[#332d27]">
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
            title="MOTION GRAPHICS"
            projects={motionProjects}
            crtFrame={galleryScreen}
            onOpen={setSelectedProject}
          />

          <ProjectSection
            id="three-dimensional"
            title="3D WORK"
            projects={threeDProjects}
            crtFrame={galleryScreen}
            onOpen={setSelectedProject}
          />

          <ProjectSection
            id="illustration"
            title="ILLUSTRATION / GRAPHIC WORK"
            projects={illustrationProjects}
            crtFrame={galleryScreen}
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