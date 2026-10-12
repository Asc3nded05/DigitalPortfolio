import crtFrame from '../assets/About Me CRT TV.svg'

function AboutCRT() {
  return (
    <div className="relative w-full min-w-0 container-type:inline-size">
      {/* SCREEN CONTENT */}
      <div
        className="
          absolute
          left-[12%]
          right-[12%]
          top-[6%]
          bottom-[20%]
          z-20
          overflow-hidden
          px-[5%]
          py-[4%]
          font-rounded
          text-[clamp(8px,.85cqw,22px)]
          max-[1200px]:text-[clamp(8px,1.75cqw,20px)]
          max-[1920px]:text-[clamp(8px,1.1cqw,20px)]
          font-bold
          leading-[1.25]
          text-[#ffba08]
          text-justify
        "
      >
        <h1
          className="
            mb-[4%]
            font-paroxysm
            text-[clamp(14px,3cqw,54px)]
            leading-none
          "
        >
          Operator:
        </h1>

        <p>
          Hey, I’m Riley Van Heukelum, a motion graphic designer and web
          developer based in Rochester, New York. I have a passion for art,
          design, and computers and believe that human expression through
          creativity is some of the most meaningful work we can do. When I’m
          not working on my next website or creative project, I love engaging
          with all sorts of art from the breathtakingly beautiful animation
          of Studio Ghibli to experimental internet projects like the analog
          horror series Gemini Home Entertainment.
        </p>

        <p className="mt-[4%]">
          As a graduating senior at Houghton University with a double major
          in Computer Science and Communications and a concentration in
          Media Arts and Visual Communication, I bridge a distinct gap
          between technical computer skills, interpersonal communication,
          and design. With computers becoming ever more deeply integrated
          into our daily lives, I strive to leverage technology to create
          meaningful and human-centered experiences and to make the complex
          world of computers a little more accessible through effective
          communication. I have experience working as a software developer
          and have invested in my Houghton community by co-founding the
          Student Independent Designers and Artists club and by serving as
          a proctor and teacher’s assistant helping run the school's media
          computer lab. I’m deeply motivated, constantly curious, and always
          ready to learn whatever new tools, software, and skills I need to
          pursue whatever project comes my way next.
        </p>
      </div>

      {/* PHYSICAL CRT FRAME */}
      <img
        src={crtFrame}
        alt=""
        aria-hidden="true"
        className="relative z-10 block h-auto w-full select-none"
        draggable="false"
      />
    </div>
  )
}

export default AboutCRT