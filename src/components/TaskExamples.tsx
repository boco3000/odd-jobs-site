const TASKS = [
  "Furniture assembly (IKEA, Wayfair)",
  "Moving help (load/unload, heavy lifting)",
  "Errands + deliveries",
  "Cleaning + quick resets",
  "Mounting TVs, shelves, mirrors",
  "Event setup + breakdown",
] as const;

export default function TaskExamples() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-center">Popular tasks in NYC</h2>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
        A few examples of what OddJobs New York can help with.
      </p>

      <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
        {TASKS.map((task) => (
          <li
            key={task}
            className="rounded-md border p-4 text-gray-800 dark:border-gray-700 dark:text-gray-200"
          >
            {task}
          </li>
        ))}
      </ul>
    </section>
  );
}