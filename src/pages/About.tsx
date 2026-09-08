import leftSidebar from '../assets/About Me Left Sidebar.jpg'
import centerSection from '../assets/About Me Center.jpg'
import rightSidebar from '../assets/About Me Right Sidebar.jpg'

function About() {
  return (
    <main
      className="
        min-h-screen
        overflow-x-auto
        bg-[#302b27]
      "
    >
      <section
        className="
          mx-auto
          w-full
          max-w-[1942px]
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-[252.44fr_1453fr_236.11fr]
            items-stretch
          "
        >
          {/* ==========================================================
              LEFT SIDEBAR
              ========================================================== */}
          <img
            src={leftSidebar}
            alt=""
            className="
              block
              h-auto
              w-full
              select-none
            "
            draggable="false"
          />

          {/* ==========================================================
              CENTER CONTENT
              ========================================================== */}
          <img
            src={centerSection}
            alt="About Riley Van Heukelum"
            className="
              block
              h-auto
              w-full
              select-none
            "
            draggable="false"
          />

          {/* ==========================================================
              RIGHT SIDEBAR
              ========================================================== */}
          <img
            src={rightSidebar}
            alt=""
            className="
              block
              h-auto
              w-full
              select-none
            "
            draggable="false"
          />
        </div>
      </section>
    </main>
  )
}

export default About