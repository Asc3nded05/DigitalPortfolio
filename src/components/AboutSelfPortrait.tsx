import selfPortraitFrame from '../assets/About Me Self Portrait.svg'
import selfPortraitPhoto from '../assets/CRT Self Portrait.jpg'

function AboutSelfPortrait() {
  return (
    <div className="relative w-full">
      {/* Portrait photograph */}
      <div
        className="
          absolute
          left-[10%]
          right-[10%]
          top-[15%]
          bottom-[12%]
          z-0
          overflow-hidden
        "
      >
        <img
          src={selfPortraitPhoto}
          alt="Riley Van Heukelum"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* Physical CRT frame */}
      <img
        src={selfPortraitFrame}
        alt=""
        aria-hidden="true"
        className="
          relative
          z-10
          block
          h-auto
          w-full
          select-none
        "
        draggable="false"
      />
    </div>
  )
}

export default AboutSelfPortrait