import { NavLink } from 'react-router-dom'

interface RockerSwitchProps {
  label: string
  path: string
}

function RockerSwitch({ label, path }: RockerSwitchProps) {
  return (
    <NavLink
      to={path}
      end={path === '/'}
      className="group flex flex-col items-center"
      aria-label={`Navigate to ${label.toLowerCase()}`}
    >
      {({ isActive }) => (
        <>
          {/* ============================================================
              SWITCH HOUSING
              ============================================================ */}
          <span
            className="
              relative
              flex
              h-[68px] w-[42px]
              items-center
              justify-center
              rounded-[4px]
              border
              border-[#151411]
              bg-[#292822]
              p-[3px]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-3px_5px_rgba(0,0,0,0.7),0_2px_3px_rgba(0,0,0,0.4)]
              [perspective:180px]
              sm:h-[74px] sm:w-[46px]
            "
          >
            {/* ==========================================================
                RECESSED CAVITY
                ========================================================== */}
            <span
              className="
                absolute
                inset-[4px]
                rounded-[3px]
                border
                border-[#10100e]
                bg-[#141412]
                shadow-[inset_0_2px_5px_rgba(0,0,0,0.9)]
              "
              aria-hidden="true"
            />

            {/* ==========================================================
                CAVITY TOP HIGHLIGHT
                ========================================================== */}
            <span
              className="
                pointer-events-none
                absolute
                left-[5px]
                right-[5px]
                top-[5px]
                z-[2]
                h-px
                bg-white/[0.08]
              "
              aria-hidden="true"
            />

            {/* ==========================================================
                CAVITY BOTTOM SHADOW
                ========================================================== */}
            <span
              className="
                pointer-events-none
                absolute
                bottom-[5px]
                left-[5px]
                right-[5px]
                z-[2]
                h-[2px]
                bg-black/40
              "
              aria-hidden="true"
            />

            {/* ==========================================================
                INVISIBLE PIVOT WRAPPER

                This element does not visually appear.

                Its purpose is to establish a fixed horizontal rotation
                axis through the exact center of the rocker.
                ========================================================== */}
            <span
              className="
                relative
                z-10
                flex
                h-[56px] w-[30px]
                items-center
                justify-center
                [transform-style:preserve-3d]
                transition-transform
                duration-150
                ease-out
                sm:h-[62px] sm:w-[34px]
              "
              style={{
                transform: isActive
                  ? 'rotateX(15deg)'
                  : 'rotateX(-15deg)',
                transformOrigin: 'center center',
              }}
            >
              {/* ========================================================
                  ROCKER FACE
                  ======================================================== */}
              <span
                className="
                  relative
                  flex
                  h-full w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[4px]
                  border
                  border-[#5f5b52]
                  bg-gradient-to-r
                  from-[#35322d]
                  via-[#5b5850]
                  to-[#35322d]
                  shadow-[inset_2px_0_3px_rgba(255,255,255,0.14),inset_-2px_0_4px_rgba(0,0,0,0.5),0_2px_2px_rgba(0,0,0,0.5)]
                  transition-all
                  duration-150
                  ease-out
                "
                style={{
                  boxShadow: isActive
                    ? 'inset 2px 0 3px rgba(0,0,0,0.45), inset -2px 0 3px rgba(255,255,255,0.08), 0 1px 1px rgba(0,0,0,0.8)'
                    : 'inset 2px 0 3px rgba(255,255,255,0.14), inset -2px 0 4px rgba(0,0,0,0.5), 0 2px 2px rgba(0,0,0,0.5)',
                }}
              >
                {/* ======================================================
                    TOP EDGE HIGHLIGHT
                    ====================================================== */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-x-1
                    top-0
                    h-px
                    bg-white/20
                  "
                  aria-hidden="true"
                />

                {/* ======================================================
                    LEFT EDGE
                    ====================================================== */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-y-1
                    left-0
                    w-px
                    bg-white/10
                  "
                  aria-hidden="true"
                />

                {/* ======================================================
                    RIGHT EDGE
                    ====================================================== */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-y-1
                    right-0
                    w-px
                    bg-black/30
                  "
                  aria-hidden="true"
                />

                {/* ======================================================
                    CENTER HORIZONTAL SEAM

                    This gives the rocker a subtle indication of where
                    the two halves meet without showing the pivot itself.
                    ====================================================== */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-px
                    w-[18px]
                    -translate-x-1/2
                    bg-black/20
                  "
                  aria-hidden="true"
                />

                {/* ======================================================
                    BOTTOM EDGE SHADOW
                    ====================================================== */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1
                    right-1
                    h-[2px]
                    bg-black/20
                  "
                  aria-hidden="true"
                />
              </span>
            </span>
          </span>

          {/* ============================================================
              INDICATOR LAMP
              ============================================================ */}
          <span
            className={`
              relative
              mt-2
              h-[8px] w-[8px]
              rounded-full
              border
              transition-all
              duration-150

              ${
                isActive
                  ? `
                    border-[#ffe0a0]
                    bg-[#ffb52e]
                    shadow-[0_0_3px_rgba(255,181,46,1),0_0_9px_rgba(255,181,46,0.85),0_0_16px_rgba(255,181,46,0.4)]
                  `
                  : `
                    border-[#514b40]
                    bg-[#171614]
                    shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)]
                  `
              }
            `}
            aria-hidden="true"
          >
            {isActive && (
              <span
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[3px] w-[3px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#fff1c7]
                "
              />
            )}
          </span>

          {/* ============================================================
              LABEL
              ============================================================ */}
          <span
            className={`
              mt-1.5
              font-mono
              text-[12px]
              font-medium
              tracking-[0.14em]
              transition-colors
              duration-150

              ${
                isActive
                  ? 'text-[#b26f12]'
                  : 'text-[#777066]'
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