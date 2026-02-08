const POINTS = [
  {
    title: "NYC-only focus",
    description:
      "We stay local so we can move fast, communicate clearly, and deliver consistent quality.",
  },
  {
    title: "Quality-first matching",
    description:
      "Workers are reviewed before being accepted and are expected to be on time and professional.",
  },
  {
    title: "Clear expectations",
    description:
      "Upfront details (where, when, what) help us match the right person for the job.",
  },
] as const;

export default function TrustSection() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-center">Built for New York</h2>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
        Reliability matters when your day is already packed.
      </p>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {POINTS.map((p) => (
          <div
            key={p.title}
            className="rounded-md border p-6 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}