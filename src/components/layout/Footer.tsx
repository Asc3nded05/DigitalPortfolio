import footerBanner from '../../assets/Footer Banner.svg'

function Footer() {
  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-[#302b27]
        aspect-[1920/64]
      "
    >
      {/* ============================================================
          ILLUSTRATOR FOOTER BANNER
          ============================================================ */}
      <img
        src={footerBanner}
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0
          h-full
          w-full
          select-none
          object-fill
        "
        draggable="false"
      />

      {/* ============================================================
          RESPONSIVE DESIGN CANVAS
          
          Content scales relative to the width of the footer.
          ============================================================ */}
      <div
        className="
          absolute
          inset-0
          w-full
          container-type:inline-size
        "
      >
        {/* ==========================================================
            COPYRIGHT
            ========================================================== */}
        <p
          className="
            absolute
            left-[25%]
            top-1/2
            z-10
            -translate-y-1/2
            font-rounded
            text-[clamp(7px,0.7cqw,14px)]
            font-bold
            leading-none
            text-[#dedcc4]
          "
        >
          © {new Date().getFullYear()} Riley Van Heukelum
        </p>

        {/* ==========================================================
            SOCIAL LINKS
            ========================================================== */}
        <div
          className="
            absolute
            right-[25%]
            top-1/2
            z-10
            flex
            -translate-y-1/2
            items-center
            gap-[clamp(5px,0.55cqw,11px)]
          "
        >
          {/* Email */}
          <a
            href="mailto:rileyvanheukelum@gmail.com"
            aria-label="Email Riley Van Heukelum"
            title="Email"
            className="
              flex
              h-[clamp(20px,1.8cqw,35px)]
              w-[clamp(20px,1.8cqw,35px)]
              items-center
              justify-center
              rounded-[clamp(3px,0.25cqw,5px)]
              border
              border-[#dedcc4]
              bg-[#dedcc4]
              text-[#302b27]
              transition-all
              duration-150
              hover:bg-[#f1efd9]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="
                h-[clamp(11px,1cqw,20px)]
                w-[clamp(11px,1cqw,20px)]
              "
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rileyvanheukelum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Riley Van Heukelum on LinkedIn"
            title="LinkedIn"
            className="
              flex
              h-[clamp(20px,1.8cqw,35px)]
              w-[clamp(20px,1.8cqw,35px)]
              items-center
              justify-center
              rounded-[clamp(3px,0.25cqw,5px)]
              border
              border-[#dedcc4]
              bg-[#dedcc4]
              text-[#302b27]
              transition-all
              duration-150
              hover:bg-[#f1efd9]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="
                h-[clamp(11px,1cqw,20px)]
                w-[clamp(11px,1cqw,20px)]
              "
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48 0 1.17 0 2.35 0 3.52v2.45ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.56V9H3.54v11.45Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer