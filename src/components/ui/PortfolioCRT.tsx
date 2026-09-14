import { useState, useRef } from 'react'

interface PortfolioCRTProps {
  title: string
  description: string
  media: string
  type: 'image' | 'video'
  alt?: string
  crtFrame: string
  crtScreen: string
  thumbnail?: string
  onOpen: () => void
}

function PortfolioCRT({
  title,
  description,
  media,
  type,
  alt = '',
  crtFrame,
  crtScreen,
  thumbnail,
  onOpen,
}: PortfolioCRTProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (type !== 'video') return

    const video = videoRef.current
    if (!video) return

    void video.play().catch(() => {})
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
      {/* CRT monitor */}
      <button
        type="button"
        onClick={onOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative block w-full cursor-zoom-in text-left"
        aria-label={`Expand ${title}`}
      >
        {/* CRT screen texture */}
        <img
          src={crtScreen}
          alt=""
          aria-hidden="true"
          className="relative z-10 block h-auto w-full select-none"
          draggable="false"
        />

        {/* Portfolio media */}
        <div
          className="absolute z-20"
          style={{
            left: '12.5%',
            top: '8.5%',
            width: '75%',
            height: '76%',
          }}
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            {type === 'image' ? (
              <img
                src={media}
                alt={alt}
                className="block max-h-full max-w-full object-contain"
                loading="lazy"
              />
            ) : (
              <>
                {/* Video */}
                <video
                  ref={videoRef}
                  src={media}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onPlaying={() => setIsPlaying(true)}
                  onError={() => setIsPlaying(false)}
                  className="h-full w-full object-contain"
                />

                {/* Thumbnail */}
                {thumbnail && (
                  <img
                    src={thumbnail}
                    alt=""
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ${
                      isPlaying ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                )}
              </>
            )}

            {/* CRT scanlines */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.10) 4px)',
              }}
            />

            {/* CRT glass darkening */}
            <div className="pointer-events-none absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* CRT frame */}
        <img
          src={crtFrame}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 block h-full w-full select-none"
          draggable="false"
        />
      </button>

      {/* Project information */}
      <div className="mt-3 px-2">
        <h3 className="font-rounded text-[13px] font-bold tracking-wide text-[#332d27]">
          {title}
        </h3>

        <p className="mt-1 font-rounded text-[11px] leading-[1.35] text-[#5c554b]">
          {description}
        </p>
      </div>
    </article>
  )
}

export default PortfolioCRT