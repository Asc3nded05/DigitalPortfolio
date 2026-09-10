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
    title: 'MOTION PROJECT 01',
    description: 'Experimental motion graphics and time-based visual work.',
    media: projectPath('Pinesbarrow Countdown.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'MOTION PROJECT 02',
    description: 'Short-form animation exploring typography and movement.',
    media: projectPath('Bloodbarrow Trailer.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  // {
  //   title: 'MOTION PROJECT 03',
  //   description: 'Time-based visual experiment.',
  //   media: projectPath('Ainulindale Explainer Video.mp4'),
  //   type: 'video',
  //   alt: 'Motion graphics project',
  // },
  {
    title: 'MOTION PROJECT 04',
    description: 'Time-based visual experiment.',
    media: projectPath('NES Controller Advertisement.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'MOTION PROJECT 05',
    description: 'Time-based visual experiment.',
    media: projectPath('Windows95 Joke.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'MOTION PROJECT 06',
    description: 'Time-based visual experiment.',
    media: projectPath('Kinetic Typography.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'MOTION PROJECT 07',
    description: 'Time-based visual experiment.',
    media: projectPath('Lower Thirds.mp4')  ,
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'MOTION PROJECT 08',
    description: 'Time-based visual experiment.',
    media: projectPath('Spotify Logo Animation.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'MOTION PROJECT 09',
    description: 'Time-based visual experiment.',
    media: projectPath('Exposure Balance.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'MOTION PROJECT 10',
    description: 'Time-based visual experiment.',
    media: projectPath('Camera Explainer Transition.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'MOTION PROJECT 11',
    description: 'Time-based visual experiment.',
    media: projectPath('Flipbook.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  {
    title: 'MOTION PROJECT 12',
    description: 'Time-based visual experiment.',
    media: projectPath('Matthias.mp4'),
    type: 'video',
    alt: 'Motion graphics project',
  },
  // {
  //   title: 'MOTION PROJECT 13',
  //   description: 'Time-based visual experiment.',
  //   media: projectPath('Hevel.mp4'),
  //   type: 'video',
  //   alt: 'Motion graphics project',
  // },
  // {
  //   title: 'MOTION PROJECT 14',
  //   description: 'Time-based visual experiment.',
  //   media: projectPath('Skinamarink Review.mp4'),
  //   type: 'video',
  //   alt: 'Motion graphics project',
  // },
  // {
  //   title: 'MOTION PROJECT 15',
  //   description: 'Time-based visual experiment.',
  //   media: projectPath('Sword in the Stone.mp4'),
  //   type: 'video',
  //   alt: 'Motion graphics project',
  // },
]

const threeDProjects: Project[] = [
  {
    title: '3D PROJECT 01',
    description: 'Three-dimensional modeling, lighting, and rendering.',
    media: projectPath('AAE Warning 1.jpg'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: '3D PROJECT 02',
    description: 'Experimental 3D environment and material study.',
    media: projectPath('AAE Warning 2.jpg'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: '3D PROJECT 03',
    description: 'Procedural and experimental 3D work.',
    media: projectPath('AAE Warning 3.jpg'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: '3D PROJECT 04',
    description: 'Procedural and experimental 3D work.',
    media: projectPath('Castle 01.png'),
    type: 'image',
    alt: '3D artwork',
  },
  {
    title: '3D PROJECT 05',
    description: 'Procedural and experimental 3D work.',
    media: projectPath('Castle 02.png'),
    type: 'image',
    alt: '3D artwork',
  },
]

const illustrationProjects: Project[] = [
  {
    title: 'ILLUSTRATION 01',
    description: 'Illustration and graphic design work.',
    media: projectPath('Polaroid Illustration.png'),
    type: 'image',
    alt: 'Illustration',
  },
  {
    title: 'ILLUSTRATION 02',
    description: 'Character, editorial, or conceptual illustration.',
    media: projectPath('GhibliStyleSelfPortrait.png'),
    type: 'image',
    alt: 'Illustration',
  },
  // {
  //   title: 'ILLUSTRATION 03',
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