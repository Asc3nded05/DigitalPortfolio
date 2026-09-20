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
          RESPONSIVE DESIGN CANVAS
          
          Everything inside this container scales relative to
          the width of the header rather than the viewport.
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
            PAROXYSM SYSTEMS
            ========================================================== */}
        <NavLink
          to="/"
          end
          className="
            absolute
            left-[3.5%]
            bottom-[35%]
            z-10
          "
          aria-label="Paroxysm Systems - Home"
        >
          <div
            className="
              font-paroxysm
              text-[clamp(20px,2.5cqw,10vh)]
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
              text-[clamp(20px,2.5cqw,10vh)]
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
            left-[15%]
            bottom-[33%]
            z-10
            text-[#dedcc4]
          "
        >
          <div
            className="
              font-rounded
              text-[clamp(9px,1.15cqw,6vh)]
              font-bold
              leading-none
            "
          >
            RVH-05
          </div>

          <div
            className="
              mt-[0.3cqw]
              font-rounded
              text-[clamp(7px,0.9cqw,4vh)]
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
            right-[3.5%]
            top-[55%]
            z-20
            -translate-y-1/2
            rounded-[clamp(5px,0.57cqw,11px)]
            border
            border-[#d8d5bd]
            bg-[#dedcc4]
            px-[clamp(10px,1.56cqw,30px)]
            py-[clamp(6px,0.78cqw,15px)]
            shadow-[0_2px_5px_rgba(0,0,0,0.35)]
          "
        >
          <nav
            className="
              flex
              items-end
              gap-[clamp(7px,0.3cqw,18px)]
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