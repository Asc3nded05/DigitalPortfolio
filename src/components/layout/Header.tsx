import { NavLink } from 'react-router-dom'

import headerBanner from '../../assets/Header Banner.svg'

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
        w-full
        overflow-hidden

        bg-[#302b27]
        aspect-[1920.06/180.64]
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
          object-fill
        "
        draggable="false"
      />

      {/* ============================================================
          HEADER CONTENT CANVAS
          ============================================================ */}
      <div
        className="
          relative
          mx-auto
          h-full
          w-full
          max-w-[1920px]
        "
      >
        {/* ==========================================================
            PAROXYSM SYSTEMS
            ========================================================== */}
        <NavLink
          to="/"
          end
          className="
            absolute
            left-[4%]
            top-[16%]
            z-10
          "
          aria-label="Paroxysm Systems - Home"
        >
          <div
            className="
              font-paroxysm
              text-[clamp(28px,2.5vw,50px)]
              leading-[0.9]
              tracking-[-0.04em]
              text-[#dedcc4]
            "
          >
            Paroxysm
          </div>

          <div
            className="
              font-paroxysm
              text-[clamp(28px,2.5vw,50px)]
              leading-[0.9]
              tracking-[-0.04em]
              text-[#dedcc4]
            "
          >
            Systems
          </div>
        </NavLink>

        {/* ==========================================================
            SYSTEM IDENTIFICATION
            ========================================================== */}
        <div
          className="
            absolute
            left-[15.5%]
            top-[40%]
            z-10
            text-[#dedcc4]
          "
        >
          <div
            className="
              font-rounded
              text-[clamp(13px,1.15vw,22px)]
              font-bold
              leading-none
            "
          >
            RVH-05
          </div>

          <div
            className="
              mt-[6px]
              font-rounded
              text-[clamp(10px,0.9vw,17px)]
              font-bold
              leading-none
            "
          >
            Creative Archive System
          </div>
        </div>

        {/* ==========================================================
            NAVIGATION ENCLOSURE
            ========================================================== */}
        <div
          className="
            absolute
            right-[4%]
            top-[55%]
            z-20
            -translate-y-1/2
            rounded-[11px]
            border
            border-[#d8d5bd]
            bg-[#dedcc4]
            px-[30px]
            py-[15px]
            shadow-[0_2px_5px_rgba(0,0,0,0.35)]
          "
        >
          <nav
            className="
              flex
              items-end
              gap-[18px]
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