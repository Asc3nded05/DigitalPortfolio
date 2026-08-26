function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black/50">
        Get In Touch
      </p>

      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
        Contact
      </h1>

      <div className="mt-12">
        <p className="max-w-xl text-lg leading-relaxed text-black/60">
          Interested in working together or learning more about my work?
          Add your preferred contact method here.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="mt-8 inline-block text-lg underline underline-offset-4"
        >
          your-email@example.com
        </a>
      </div>
    </section>
  )
}

export default Contact