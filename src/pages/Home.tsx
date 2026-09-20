import { useEffect, useRef, useState } from 'react'

import demoReelFrame from '../assets/Demo Reel Frame.svg'

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
    <>
      <section
        className="
          flex
          min-h-[calc(100vh-220px)]
          justify-center
          overflow-visible
          bg-[#dedcc4]
          px-4
          pb-4
          pt-4
          sm:px-6
          sm:pb-6
          sm:pt-6
        "
      >
        {/* ==========================================================
            DEMO REEL MONITOR
            ========================================================== */}
        <div
          className="
            relative
            mx-auto
            mt-0
            w-[min(97vw,calc((100vh-275px)*2.14))]
            shrink-0
          "
        >
          {/* ========================================================
              VIDEO
              
              The screen opening in Demo Reel Frame.svg is
              approximately:
              
              left:   13.2%
              top:     5.25%
              width:  73.8%
              height: 88.5%
              ======================================================== */}
          <div
            className="
              absolute
              left-[13.2%]
              top-[5.25%]
              z-10
              aspect-video
              w-[73.8%]
              overflow-hidden
              bg-black
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
                block
                h-full
                w-full
                cursor-pointer
                object-cover
              "
              aria-label="Riley Van Heukelum demo reel"
            />

            {/* ======================================================
                INTRO OVERLAY
                ====================================================== */}
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

            {/* ======================================================
                PLAYING INDICATOR
                ====================================================== */}
            {!isPlaying && !showIntro && (
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  flex
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#dedcc4]/90
                    text-[#302b27]
                    shadow-lg
                  "
                >
                  ▶
                </span>
              </div>
            )}
          </div>

          {/* ========================================================
              MONITOR FRAME
              ======================================================== */}
          <img
            src={demoReelFrame}
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              relative
              z-30
              block
              h-auto
              w-full
              select-none
            "
            draggable="false"
          />
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
    </>
  )
}

export default Home