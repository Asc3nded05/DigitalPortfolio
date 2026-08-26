function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black/50">
          Selected Work
        </p>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          Gallery
        </h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="aspect-[4/3] rounded-2xl bg-black/5 p-6"
          >
            <span className="text-sm text-black/40">
              Project {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery