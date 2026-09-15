import { useRef, useState } from 'react'

interface PortfolioCRTProps {
  title: string
  description: string
  media: string
  preview?: string
  type: 'image' | 'video'
  alt?: string
  crtFrame: string
  thumbnail?: string
  onOpen: () => void
}

function PortfolioCRT({
  title,
  description,
  media,
  preview,
  type,
  alt = '',
  crtFrame,
  thumbnail,
  onOpen,
}: PortfolioCRTProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
  if (type !== 'video' || !preview) return

  const video = videoRef.current
  if (!video) return

  video.currentTime = 0

  void video.play().catch((error) => {
    console.error(`Could not play preview for "${title}"`, error)
  })
}

  const handleMouseLeave = () => {
    if (type !== 'video') return

    const video = videoRef.current
    if (!video) return

    video.pause()
    video.currentTime = 0
    setIsPlaying(false)
  }

  return (
    <article className="group w-full">
      <button
        type="button"
        onClick={onOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative block w-full cursor-zoom-in text-left"
        aria-label={`View ${title} project`}
      >
        {/* Continuous dark screen background */}
        <div
          className="absolute z-0 overflow-hidden rounded-[6px]"
          style={{
            left: '8.72%',
            top: '10.57%',
            width: '82.68%',
            height: '83.57%',
            backgroundColor: '#241b18',
          }}
          aria-hidden="true"
        />

        {/* Upper screen/media area */}
        <div
          className="absolute z-10 overflow-hidden"
          style={{
            left: '10.5%',
            top: '12.5%',
            width: '79%',
            height: '55%',
          }}
        >
          <div className="relative h-full w-full overflow-hidden">
            {type === 'image' ? (
              <img
                src={media}
                alt={alt}
                loading="lazy"
                className="block h-full w-full object-contain"
              />
            ) : (
              <>
                <video
                  ref={videoRef}
                  src={preview ?? media}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onPlaying={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={() => setIsPlaying(false)}
                  className="absolute inset-0 z-10 block h-full w-full object-contain"
                />

                {thumbnail && (
                  <img
                    src={thumbnail}
                    alt=""
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 z-20 h-full w-full object-contain transition-opacity duration-150 ${
                      isPlaying ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                )}
              </>
            )}
          </div>
        </div>

        {/* Description area inside the lower portion of the screen */}
        <div
          className="absolute z-10 overflow-hidden"
          style={{
            left: '10.5%',
            bottom: '7.5%',
            width: '79%',
            height: '25%',
          }}
        >
          <p className="h-full overflow-hidden px-[3%] py-[3%] font-rounded text-[clamp(9px,1vw,14px)] font-bold leading-[1.15] text-[#f4c400]">
            {description}
          </p>
        </div>

        {/* CRT effects across the entire screen */}
        <div
          className="pointer-events-none absolute z-20 overflow-hidden rounded-[6px]"
          style={{
            left: '8.72%',
            top: '10.57%',
            width: '82.68%',
            height: '83.57%',
          }}
          aria-hidden="true"
        >
          {/* CRT scanlines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.10) 4px)',
            }}
          />

          {/* CRT glass darkening */}
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Complete computer frame */}
        <img
          src={crtFrame}
          alt=""
          aria-hidden="true"
          className="relative z-30 block h-auto w-full select-none"
          draggable="false"
        />

        {/* Project title printed on the computer panel */}
        <h3
          className="pointer-events-none absolute left-[8.8%] top-[3%] z-40 max-w-[74%] truncate font-paroxysm text-[clamp(9px,1.35vw,18px)] leading-none tracking-wide text-[#dedcc4]"
        >
          {title}
        </h3>
      </button>
    </article>
  )
}

export default PortfolioCRT