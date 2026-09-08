function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#302b27]">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-[#dedcc4] font-rounded sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Riley Van Heukelum</p>

        <p>Digital Portfolio</p>
      </div>
    </footer>
  )
}

export default Footer