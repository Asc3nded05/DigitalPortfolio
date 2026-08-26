function Process() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black/50">
        How I Work
      </p>

      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
        Process
      </h1>

      <div className="mt-16 space-y-16">
        <section>
          <span className="text-sm text-black/40">01</span>
          <h2 className="mt-3 text-2xl font-medium">Discover</h2>
          <p className="mt-4 leading-relaxed text-black/60">
            Research, observation, questions, and defining the problem.
          </p>
        </section>

        <section>
          <span className="text-sm text-black/40">02</span>
          <h2 className="mt-3 text-2xl font-medium">Explore</h2>
          <p className="mt-4 leading-relaxed text-black/60">
            Sketches, concepts, experimentation, and iteration.
          </p>
        </section>

        <section>
          <span className="text-sm text-black/40">03</span>
          <h2 className="mt-3 text-2xl font-medium">Create</h2>
          <p className="mt-4 leading-relaxed text-black/60">
            Refinement, production, testing, and final execution.
          </p>
        </section>

        <section>
          <span className="text-sm text-black/40">04</span>
          <h2 className="mt-3 text-2xl font-medium">Reflect</h2>
          <p className="mt-4 leading-relaxed text-black/60">
            Evaluating the result and documenting what I learned.
          </p>
        </section>
      </div>
    </section>
  )
}

export default Process