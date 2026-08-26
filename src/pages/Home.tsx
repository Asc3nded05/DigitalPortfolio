import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24 lg:px-8">
      <div className="max-w-5xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-black/50">
          Digital Portfolio
        </p>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          Riley Van Heukelum
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-black/60">
          Designer, creator, and problem solver. This portfolio explores
          selected work, creative process, and the ideas behind my projects.
        </p>

        <div className="mt-10">
          <Link
            to="/gallery"
            className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            View my work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home