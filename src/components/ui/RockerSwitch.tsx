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
        min-w-[clamp(42px,3.96cqw,76px)]
        flex-col
        items-center
        justify-end
      "
      aria-label={`Navigate to ${label.toLowerCase()}`}
    >
      {({ isActive }) => (
        <>
          {/* Rocker switch */}
          <img
            src={isActive ? onImage : offImage}
            alt=""
            aria-hidden="true"
            className="
              block
              h-[clamp(42px,3.96cqw,76px)]
              w-[clamp(28px,2.6cqw,50px)]
              select-none
              object-contain
              transition-transform
              duration-100
              group-active:scale-[0.97]
            "
            draggable="false"
          />

          {/* Indicator light */}
          <span
            className="
              relative
              mt-[clamp(2px,0.26cqw,5px)]
              h-[clamp(5px,0.52cqw,10px)]
              w-[clamp(5px,0.52cqw,10px)]
              rounded-full
            "
            style={{
              backgroundColor: isActive
                ? indicatorColor
                : '#514c43',

              boxShadow: isActive
                ? `
                    0 0 3px ${indicatorColor},
                    0 0 8px ${indicatorColor},
                    0 0 14px ${indicatorColor}99
                  `
                : 'inset 0 1px 2px rgba(0,0,0,0.75)',
            }}
            aria-hidden="true"
          >
            {isActive && (
              <span
                className="
                  absolute
                  left-[20%]
                  top-[10%]
                  h-[20%]
                  w-[20%]
                  rounded-full
                  bg-white/80
                "
              />
            )}
          </span>

          {/* Label */}
          <span
            className="
              mt-[clamp(2px,0.21cqw,4px)]
              whitespace-nowrap
              font-rounded
              text-[clamp(6px,0.625cqw,12px)]
              font-bold
              leading-none
              tracking-[-0.02em]
              text-[#514b43]
              transition-colors
              duration-150
              group-[.active]:text-[#332d27]
            "
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  )
}

export default RockerSwitch