import { NavLink } from 'react-router-dom'
import RockerSwitch from '../ui/RockerSwitch'

const navigation = [
  { label: 'HOME', path: '/' },
  { label: 'WORK', path: '/gallery' },
  { label: 'PROCESS', path: '/process' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CONTACT', path: '/contact' },
]

function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-[#9b8d73]
        bg-[#fceac7]
        text-[#39352d]
        shadow-[0_2px_8px_rgba(50,40,25,0.18)]
      "
    >
      <nav
        className="
          mx-auto flex max-w-7xl
          items-center
          justify-between
          gap-6
          px-4 py-3
          sm:px-6
          lg:px-8
        "
      >
        {/* ============================================================
            SYSTEM / LOGO
            ============================================================ */}
        <NavLink
          to="/"
          end
          className="shrink-0"
          aria-label="Riley Van Heukelum - Home"
        >
          <div
            className="
              font-mono
              text-xs
              font-bold
              tracking-[0.2em]
              text-[#4b463d]
            "
          >
            RVH
          </div>

          <div
            className="
              mt-0.5
              font-mono
              text-[9px]
              tracking-[0.15em]
              text-[#8c806d]
            "
          >
            SYS.01
          </div>
        </NavLink>

        {/* ============================================================
            NAVIGATION
            ============================================================ */}
        <div
          className="
            flex
            flex-1
            justify-end
            gap-2
            sm:gap-3
            lg:gap-4
          "
        >
          {navigation.map((item) => (
            <RockerSwitch
              key={item.path}
              label={item.label}
              path={item.path}
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar