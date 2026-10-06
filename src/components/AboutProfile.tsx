import profileFrame from '../assets/About Me Profile.svg'

function AboutProfile() {
  return (
    <div className="relative w-full container-type:inline-size">
      {/* Profile information */}
      <div
        className="
          absolute
          inset-[13%]
          z-20
          flex
          flex-col
          justify-center
          font-rounded
          text-[clamp(7px,2cqw,14px)]
          font-bold
          uppercase
          leading-[2.25]
          text-[#ffba08]
          -translate-y-2.5
        "
      >
        <div
            className="
              font-paroxysm
              text-[clamp(7px,2cqw,18px)]
              translate-y-1
              -translate-x-2.25  
            "
        >
            Profile:
        </div>
        <div>Name: Riley Van Heukelum</div>
        <div>Incept Date: 09/06/2005</div>
        <div>Stationed: Rochester, NY</div>
        <div>Role: Motion and Web Designer</div>
      </div>

      {/* Physical profile panel */}
      <img
        src={profileFrame}
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

export default AboutProfile