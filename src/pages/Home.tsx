import { useEffect, useRef, useState } from 'react'

import demoReelFrame from '../assets/Demo Reel Frame.svg'
import demoReelFrameMobile from '../assets/Demo Reel Frame Mobile.svg'

function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [showLightbox, setShowLightbox] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [introLoaded, setIntroLoaded] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const demoReel = `${import.meta.env.BASE_URL}media/videos/reel/DemoReel_2026_v1.mp4`

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    video.play().catch(() => {
      // Autoplay may be blocked by the browser.
      // The user can still start the video by clicking.
    })

    const timer = window.setTimeout(() => {
      setIntroLoaded(true)
    }, 100)

    return () => window.clearTimeout(timer)
  }, [])

  const handleScreenClick = () => {
    if (showIntro) {
      setShowIntro(false)
      return
    }

    setShowLightbox(true)
  }

  const handleCloseLightbox = () => {
    setShowLightbox(false)
  }

  return (
    <main className="flex flex-col bg-[#dedcc4]">

      {/* ==========================================================
          DEMO REEL MONITOR

          Desktop uses the landscape frame.
          Tablet/mobile uses the purpose-built portrait frame.

          The video, intro overlay, and playing indicator are shared
          between both layouts.
          ========================================================== */}
      <section
        className="
          flex
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-[#dedcc4]
          px-3
          py-1
          sm:px-5
          sm:py-2
          lg:px-6
          lg:py-4
        "
      >
        {/* ========================================================
            RESPONSIVE MONITOR FRAME

            Desktop: frame ratio 937.44 / 434.26.
            Mobile: frame ratio 434.26 / 752.07.
            ======================================================== */}
        <div
          className="
            relative
            w-[min(97vw,calc((100svh-280px)*2.24))]
            shrink-0
            lg:block
            max-lg:!hidden
          "
          style={{ aspectRatio: '937.44 / 434.26' }}
        >
          {/* Desktop frame artwork */}
          <img
            src={demoReelFrame}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="
              pointer-events-none
              absolute
              inset-0
              z-30
              block
              h-full
              w-full
              select-none
            "
          />

          {/* Desktop video screen opening */}
          <div
            className="
              absolute
              left-[13.2%]
              top-[5.25%]
              z-10
              flex
              aspect-video
              w-[73.8%]
              items-center
              justify-center
              overflow-hidden
              bg-[#241b18]
              [container-type:inline-size]
            "
          >
            <video
              ref={videoRef}
              src={demoReel}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              onPlaying={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={handleScreenClick}
              className="
                absolute
                inset-0
                block
                h-full
                w-full
                cursor-pointer
                object-cover
              "
              aria-label="Riley Van Heukelum demo reel"
            />

            {/* Intro overlay */}
            <button
              type="button"
              onClick={handleScreenClick}
              aria-label="Enter demo reel"
              className={`
                absolute
                inset-0
                z-20
                flex
                cursor-pointer
                flex-col
                items-center
                justify-center
                bg-[#171512]/55
                px-4
                text-center
                transition-opacity
                duration-700
                ${
                  showIntro
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
                }
              `}
            >
              <span
                className={`
                  font-paroxysm
                  text-[clamp(28px,5cqw,82px)]
                  leading-[0.9]
                  tracking-[-0.04em]
                  text-[#dedcc4]
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)]
                  transition-all
                  duration-1000
                  ease-out
                  ${
                    introLoaded
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  }
                `}
              >
                Riley Van Heukelum
              </span>

              <span
                className={`
                  mt-[clamp(6px,1cqw,16px)]
                  font-rounded
                  text-[clamp(11px,1.7cqw,28px)]
                  font-bold
                  tracking-[0.08em]
                  text-[#dedcc4]
                  drop-shadow-[0_2px_3px_rgba(0,0,0,0.75)]
                  transition-all
                  duration-1000
                  delay-150
                  ease-out
                  ${
                    introLoaded
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  }
                `}
              >
                Motion and Web Designer
              </span>
            </button>

            {/* Playing indicator */}
            {!isPlaying && !showIntro && (
              <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dedcc4]/90 text-[#302b27] shadow-lg">
                  ▶
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================
            TABLET / MOBILE MONITOR

            This uses the new portrait SVG, not a rotated desktop
            frame. The video remains landscape and centered inside
            the portrait screen opening, with off-black fill above
            and below the video.
            ======================================================== */}
        <div
          className="
            relative
            hidden
            w-[min(96vw,calc((100svh-120px)*0.5774))]
            shrink-0
            max-lg:!block
            lg:!hidden
          "
          style={{ aspectRatio: '434.26 / 752.07' }}
        >
          {/* Mobile frame artwork */}
          <img
            src={demoReelFrameMobile}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="
              pointer-events-none
              absolute
              inset-0
              z-30
              block
              h-full
              w-full
              select-none
            "
          />

          {/* Portrait screen opening, based on the mobile SVG */}
          <div
            className="
              absolute
              left-[5.5%]
              top-[16.4%]
              z-10
              flex
              h-[67.4%]
              w-[89%]
              items-center
              justify-center
              overflow-hidden
              bg-[#241b18]
              [container-type:inline-size]
            "
          >
            {/* Shared video: horizontal and unrotated */}
            <video
              ref={videoRef}
              src={demoReel}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              onPlaying={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={handleScreenClick}
              className="
                absolute
                left-0
                top-1/2
                block
                aspect-video
                w-full
                -translate-y-1/2
                cursor-pointer
                object-cover
              "
              aria-label="Riley Van Heukelum demo reel"
            />

            {/* Intro overlay */}
            <button
              type="button"
              onClick={handleScreenClick}
              aria-label="Enter demo reel"
              className={`
                absolute
                left-0
                top-1/2
                z-20
                flex
                aspect-video
                w-full
                -translate-y-1/2
                cursor-pointer
                flex-col
                items-center
                justify-center
                bg-[#171512]/55
                px-3
                text-center
                transition-opacity
                duration-700
                ${
                  showIntro
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
                }
              `}
            >
              <span
                className={`
                  font-paroxysm
                  text-[clamp(18px,5cqw,42px)]
                  leading-[0.9]
                  tracking-[-0.04em]
                  text-[#dedcc4]
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)]
                  transition-all
                  duration-1000
                  ${
                    introLoaded
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  }
                `}
              >
                Riley Van Heukelum
              </span>

              <span
                className={`
                  mt-2
                  font-rounded
                  text-[clamp(9px,1.7cqw,16px)]
                  font-bold
                  tracking-[0.08em]
                  text-[#dedcc4]
                  drop-shadow-[0_2px_3px_rgba(0,0,0,0.75)]
                  transition-all
                  duration-1000
                  delay-150
                  ${
                    introLoaded
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  }
                `}
              >
                Motion and Web Designer
              </span>
            </button>

            {/* Playing indicator */}
            {!isPlaying && !showIntro && (
              <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dedcc4]/90 text-[#302b27] shadow-lg">
                  ▶
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          DEMO REEL LIGHTBOX
          ============================================================ */}
      {showLightbox && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#171512]/95
            p-4
            sm:p-6
          "
          onClick={handleCloseLightbox}
        >
          <div
            className="
              relative
              flex
              max-h-[95vh]
              max-w-[95vw]
              items-center
              justify-center
            "
            onClick={(event) => event.stopPropagation()}
          >
            <video
              src={demoReel}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="
                max-h-[90vh]
                max-w-[92vw]
                object-contain
              "
            />

            {/* Close button */}
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="
                absolute
                -right-3
                -top-3
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#dedcc4]
                bg-[#302b27]
                font-rounded
                text-lg
                text-[#dedcc4]
                transition-transform
                hover:scale-105
              "
              aria-label="Close demo reel"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home