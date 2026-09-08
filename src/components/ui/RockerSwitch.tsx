import { NavLink } from 'react-router-dom'

interface RockerSwitchProps {
  label: string
  path: string
  onImage: string
  offImage: string
  indicatorColor: string
}

function RockerSwitch({
  label,
  path,
  onImage,
  offImage,
  indicatorColor,
}: RockerSwitchProps) {
  return (
    <NavLink
      to={path}
      end={path === '/'}
      className="
        group
        flex
        min-w-[62px]
        flex-col
        items-center
        justify-end
      "
      aria-label={`Navigate to ${label.toLowerCase()}`}
    >
      {({ isActive }) => (
        <>
          {/* ==========================================================
              ROCKER SWITCH
              ========================================================== */}
          <img
            src={isActive ? onImage : offImage}
            alt=""
            aria-hidden="true"
            className="
              block
              h-[76px]
              w-[50px]
              select-none
              object-contain
              transition-transform
              duration-100
              group-active:scale-[0.97]
            "
            draggable="false"
          />

          {/* ==========================================================
              INDICATOR LIGHT
              ========================================================== */}
          <span
            className="relative mt-[4px] h-[9px] w-[9px] rounded-full"
            style={{
              backgroundColor: isActive
                ? indicatorColor
                : '#514c43',

              boxShadow: isActive
                ? `0 0 3px ${indicatorColor},
                   0 0 8px ${indicatorColor},
                   0 0 14px ${indicatorColor}99`
                : 'inset 0 1px 2px rgba(0,0,0,0.75)',
            }}
            aria-hidden="true"
          >
            {/* Small reflected highlight */}
            {isActive && (
              <span
                className="
                  absolute
                  left-[2px]
                  top-[1px]
                  h-[2px]
                  w-[2px]
                  rounded-full
                  bg-white/80
                "
              />
            )}
          </span>

          {/* ==========================================================
              LABEL
              ========================================================== */}
          <span
            className={`
              mt-[3px]
              whitespace-nowrap
              font-rounded
              text-[11px]
              font-bold
              leading-none
              tracking-[-0.02em]
              transition-colors
              duration-150
              ${
                isActive
                  ? 'text-[#332d27]'
                  : 'text-[#514b43]'
              }
            `}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  )
}

export default RockerSwitch