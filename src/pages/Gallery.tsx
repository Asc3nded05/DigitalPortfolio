import PortfolioCRT from '../components/ui/PortfolioCRT'
import leftSidebar from '../assets/About Me Left Sidebar.jpg'
import rightSidebar from '../assets/About Me Right Sidebar.jpg'

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
}

const motionProjects: Project[] = [
  {
    title: 'Pinesbarrow Stopmotion Countdown',
    description: 'A countdown animation that focused on leveraging scanned graphics, textures, effects, and expressions in After Effects to create a hand-crafted stop-motion aesthetic.',
    media: projectPath('Pinesbarrow Countdown.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'Bloodbarrow Trailer',
    description: 'A mock trailer for a hypothetical horror show titled Bloodbarrow inspired by experimental analog horror projects and seeking to mimic CRT-TV and VHS style distortions and texture.',
    media: projectPath('Bloodbarrow Trailer.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
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
  },
  {
    title: 'Windows 95 Styled Animated Joke',
    description: 'An animated question-response joke inspired by retro Windows 95 computer boot up sequences and OS interfaces.',
    media: projectPath('Windows95 Joke.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'Luthen\'s Monologue',
    description: 'A kinetic typography project set to a portion of Luthen\'s monologue from season 1, episode 10 of Andor focused on creating interesting motion with primarily typographic elements.',
    media: projectPath('Kinetic Typography.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'Lower Thirds Dragon',
    description: 'A vector based lower thirds animation featuring basic character rigging and animation to creating a dragon and fantasy aesthetic.',
    media: projectPath('Lower Thirds.mp4')  ,
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'Spotify Logo Animation',
    description: 'A 3D animation of the Spotify Logo that could be used for promotional advertisements.',
    media: projectPath('Spotify Logo Animation.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'Exposure Balance Explainer',
    description: 'An animated illustration of the balance of aperture, shutter speed, and ISO that affect the exposure of an image, created as part of a larger explainer video on camera exposure as a whole.',
    media: projectPath('Exposure Balance.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'Camera Setup Title Card',
    description: 'An introductory title card and transition created for a video project focused on explaining how to set up a Sony A660 camera for video shooting. This graphic was designed with an alpha chanel to transition between video footage.',
    media: projectPath('Camera Explainer Transition.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'Flipbook',
    description: 'A flipbook animation of a bouncing ball, designed to illustrate the concept of framerate for a large explainer video on camera exposure.',
    media: projectPath('Flipbook.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'Performative Ball with Tail Excercise',
    description: 'An excerise combining squash and stretch and wave principles in a hand-drawn medium with a goal of creating motivated action through a simple scene.',
    media: projectPath('Matthias.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
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

function ProjectSection({
  id,
  title,
  projects,
  crtFrame,
  crtScreen,
}: {
  id: string
  title: string
  projects: Project[]
  crtFrame: string
  crtScreen: string
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
          />
        ))}
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#dedcc4]">
      {/* Archive header
      <section className="border-b border-[#777064] bg-[#302b27] px-6 py-10 text-[#dedcc4]">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-rounded text-[11px] tracking-[0.15em] text-[#b6ad99]">
            RVH-05 / CREATIVE ARCHIVE SYSTEM
          </p>

          <h1 className="mt-2 font-rounded text-[30px] font-bold tracking-wide">
            PROJECT DATABASE
          </h1>

          <p className="mt-3 max-w-[650px] font-rounded text-[12px] leading-relaxed text-[#c9c0ad]">
            A collection of selected work spanning motion, three-dimensional
            design, illustration, and visual experimentation.
          </p>
        </div>
      </section> */}

      {/* Main archive */}
      <section className="relative">
        <div className="mx-auto grid max-w-[1942px] grid-cols-[minmax(90px,252px)_minmax(0,1fr)_minmax(90px,236px)]">
          
          {/* Left sidebar */}
          <aside
            className="hidden bg-[#dedcc4] bg-repeat-y bg-top md:block"
            style={{
              backgroundImage: `url('${leftSidebar}')`,
            }}
          />

          {/* Portfolio */}
          <div className="min-w-0 px-6 py-12 sm:px-10 lg:px-14">
            <ProjectSection
              id="motion"
              title="MOTION / TIME-BASED WORK"
              projects={motionProjects}
              crtFrame={crtFrame}
              crtScreen={crtScreen}
            />

            <ProjectSection
              id="three-dimensional"
              title="THREE-DIMENSIONAL WORK"
              projects={threeDProjects}
              crtFrame={crtFrame}
              crtScreen={crtScreen}
            />

            <ProjectSection
              id="illustration"
              title="ILLUSTRATION / GRAPHIC WORK"
              projects={illustrationProjects}
              crtFrame={crtFrame}
              crtScreen={crtScreen}
            />
          </div>

          {/* Right sidebar */}
          <aside
            className="hidden bg-[#dedcc4] bg-repeat-y bg-top md:block"
            style={{
              backgroundImage: `url('${rightSidebar}')`,
            }}
          />
        </div>
      </section>
    </main>
  )
}

export default Gallery