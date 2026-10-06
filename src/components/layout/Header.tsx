import { NavLink } from 'react-router-dom'

import headerBanner from '../../assets/Header Banner (2).svg'

import redOn from '../../assets/Red Rocker Switch On.svg'
import redOff from '../../assets/Red Rocker Switch Off.svg'

import yellowOn from '../../assets/Yellow Rocker Switch On.svg'
import yellowOff from '../../assets/Yellow Rocker Switch Off.svg'

import blueOn from '../../assets/Blue Rocker Switch On.svg'
import blueOff from '../../assets/Blue Rocker Switch Off.svg'

import greenOn from '../../assets/Green Rocker Switch On.svg'
import greenOff from '../../assets/Green Rocker Switch Off.svg'

import RockerSwitch from '../ui/RockerSwitch'

const navigation = [
  {
    label: 'REEL',
    path: '/',
    onImage: redOn,
    offImage: redOff,
    indicatorColor: '#e74718',
  },
  {
    label: 'GALLERY',
    path: '/gallery',
    onImage: yellowOn,
    offImage: yellowOff,
    indicatorColor: '#f4b51c',
  },
  {
    label: 'ABOUT',
    path: '/about',
    onImage: blueOn,
    offImage: blueOff,
    indicatorColor: '#3285c5',
  },
  {
    label: 'CONTACT',
    path: '/contact',
    onImage: greenOn,
    offImage: greenOff,
    indicatorColor: '#238c7e',
  },
]

function Header() {
  return (
    <header
      className="
        relative
        z-50
        min-h-[150px]
        w-full
        overflow-hidden
        bg-[#302b27]

        sm:min-h-[150px]
        md:min-h-[180px]

        min-[800px]:aspect-[1920.06/180.64]
        min-[800px]:min-h-0
      "
    >
      {/* ============================================================
          ILLUSTRATOR HEADER BANNER
          ============================================================ */}
      <img
        src={headerBanner}
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0
          h-full
          w-full
          select-none
          object-cover
          object-center

          lg:object-fill
        "
        draggable="false"
      />

      {/* ============================================================
          RESPONSIVE DESIGN CANVAS
          ============================================================ */}
      <div
        className="
          absolute
          inset-0
          w-full
          container-type:inline-size
        "
      >
        {/* ==========================================================
            RILEY VAN HEUKELUM
            ========================================================== */}
        <NavLink
          to="/"
          end
          className="
            absolute
            left-[5%]
            top-[12%]
            z-10

            max-[449px]:top-[10%]

            min-[450px]:top-1/2
            min-[450px]:-translate-y-1/2

            min-[800px]:left-[3.5%]
            min-[800px]:top-auto
            min-[800px]:bottom-[35%]
            min-[800px]:translate-y-0
          "
          aria-label="Riley Van Heukelum - Home"
        >
          <div
            className="
              font-paroxysm
              text-[clamp(20px,5.5cqw,42px)]
              leading-[0.9]
              tracking-[-0.04em]
              text-[#dedcc4]

              min-[800px]:text-[clamp(20px,2.5cqw,10vh)]
            "
          >
            Riley
          </div>

          <div
            className="
              font-paroxysm
              text-[clamp(20px,5.5cqw,42px)]
              leading-[0.9]
              tracking-[-0.04em]
              text-[#dedcc4]

              min-[800px]:text-[clamp(20px,2.5cqw,10vh)]
            "
          >
            Van Heukelum
          </div>
        </NavLink>

        {/* ==========================================================
            NAVIGATION ENCLOSURE
            ========================================================== */}
        <div
          className="
            absolute
            bottom-[7%]
            left-[5%]
            right-[5%]
            z-20

            rounded-[clamp(5px,1.5cqw,11px)]
            border
            border-[#d8d5bd]
            bg-[#dedcc4]
            px-[clamp(8px,2.5cqw,30px)]
            py-[clamp(7px,1.5cqw,15px)]
            shadow-[0_2px_5px_rgba(0,0,0,0.35)]

            min-[450px]:bottom-auto
            min-[450px]:left-auto
            min-[450px]:right-[5%]
            min-[450px]:top-1/2
            min-[450px]:-translate-y-1/2
            min-[450px]:w-auto

            min-[800px]:right-[3.5%]
            min-[800px]:top-[55%]
            min-[800px]:rounded-[clamp(5px,0.57cqw,11px)]
            min-[800px]:px-[clamp(10px,1.56cqw,30px)]
            min-[800px]:py-[clamp(6px,0.78cqw,15px)]
          "
        >
          <nav
            className="
              flex
              items-end
              justify-center
              gap-[clamp(8px,2.5cqw,18px)]

              min-[450px]:justify-start

              min-[800px]:gap-[clamp(7px,0.3cqw,18px)]
            "
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <RockerSwitch
                key={item.path}
                label={item.label}
                path={item.path}
                onImage={item.onImage}
                offImage={item.offImage}
                indicatorColor={item.indicatorColor}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header