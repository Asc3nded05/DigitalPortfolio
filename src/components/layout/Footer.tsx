function Footer() {
  return (
    <footer className="border-t border-[#47403a] bg-[#302b27] px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <p className="font-rounded text-sm font-bold text-[#dedcc4]">
          © {new Date().getFullYear()} Riley Van Heukelum
        </p>

        <div className="flex items-center gap-3">
          {/* Email */}
          <a
            href="mailto:rileyvanheukelum@gmail.com"
            aria-label="Email Riley Van Heukelum"
            title="Email"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#dedcc4]/50 text-[#dedcc4] transition-all duration-150 hover:border-[#dedcc4] hover:bg-[#dedcc4]/10 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#dedcc4"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
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
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#dedcc4]/50 text-[#dedcc4] transition-all duration-150 hover:border-[#dedcc4] hover:bg-[#dedcc4]/10 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#dedcc4"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.56V9H3.54v11.45Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer