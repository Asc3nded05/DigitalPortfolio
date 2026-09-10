import { useState } from 'react'

interface PortfolioCRTProps {
  title: string
  description: string
  media: string
  type: 'image' | 'video'
  alt?: string
  crtFrame: string
  crtScreen: string
}

function PortfolioCRT({
  title,
  description,
  media,
  type,
  alt = '',
  crtFrame,
  crtScreen,
}: PortfolioCRTProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <article className="group w-full">
        {/* CRT monitor */}
        <button
        type="button"
        onClick={() => setExpanded(true)}
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
                <video
                src={media}
                className="block max-h-full max-w-full object-contain"
                muted
                loop
                playsInline
                preload="metadata"
                />
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

      {/* Expanded media */}
      {expanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171512]/90 p-6"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            {type === 'image' ? (
              <img
                src={media}
                alt={alt}
                className="max-h-[85vh] max-w-[85vw] object-contain"
              />
            ) : (
              <video
                src={media}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-[85vw]"
              />
            )}

            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#dedcc4] bg-[#302b27] font-rounded text-sm text-[#dedcc4]"
              aria-label="Close expanded project"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PortfolioCRT