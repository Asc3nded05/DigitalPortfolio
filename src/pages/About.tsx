import leftSidebar from '../assets/About Me Left Sidebar.svg'
import rightSidebar from '../assets/About Me Right Sidebar.svg'

import AboutSelfPortrait from '../components/AboutSelfPortrait'
import AboutProfile from '../components/AboutProfile'
import AboutCRT from '../components/AboutCRT'

function About() {
  return (
    <main className="bg-[#302b27]">
      <section className="mx-auto w-full max-w-[1942px]">
        <div
          className="
            relative
            w-full
            px-[12.1%]
          "
        >
          {/* ==========================================================
              LEFT SIDEBAR
              ========================================================== */}
          <img
            src={leftSidebar}
            alt=""
            aria-hidden="true"
            className="
              absolute
              left-0
              top-0
              z-0
              h-full
              w-auto
              select-none
            "
            draggable="false"
          />

          {/* ==========================================================
              CENTER
              ========================================================== */}
          <div
            className="
              relative
              z-10
              grid
              grid-cols-[424.6fr_896.47fr]
              items-start
              gap-[1.5%]
              rounded-[.75rem]
              bg-[#dedcc4]
              p-[1.2%]
            "
          >
            {/* ========================================================
                LEFT CENTER COLUMN
                ======================================================== */}
            <div
              className="
                grid
                min-w-0
                aspect-[424.6/793.08]
                grid-rows-[auto_1fr_auto]
              "
            >
              <AboutSelfPortrait />

              <div />

              <AboutProfile />
            </div>

            {/* ========================================================
                CRT
                ======================================================== */}
            <AboutCRT />
          </div>

          {/* ==========================================================
              RIGHT SIDEBAR
              ========================================================== */}
          <img
            src={rightSidebar}
            alt=""
            aria-hidden="true"
            className="
              absolute
              right-0
              top-0
              z-0
              h-full
              w-auto
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