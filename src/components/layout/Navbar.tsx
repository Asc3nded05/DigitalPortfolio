import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Work', path: '/gallery' },
  { label: 'Process', path: '/process' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-tight"
        >
          Riley Van Heukelum
        </NavLink>

        <div className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-opacity ${
                  isActive
                    ? 'font-medium opacity-100'
                    : 'opacity-60 hover:opacity-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar