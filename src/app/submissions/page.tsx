import data from "@/data/submissions.json";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString();
}

export default function SubmissionsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Demo submissions</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Portfolio-only page showing mocked submissions (not live production data).
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Request help</h2>
        <div className="mt-6 grid gap-4">
          {data.requestHelp.map((r) => (
            <div
              key={r.id}
              className="rounded-md border p-5 dark:border-gray-700"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium">{r.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(r.receivedAt)}
                </p>
              </div>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Location:
                </span>{" "}
                {r.location}
              </p>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  When:
                </span>{" "}
                {r.when}
              </p>

              <p className="mt-3 text-gray-800 dark:text-gray-200">
                {r.task}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Worker applications</h2>
        <div className="mt-6 grid gap-4">
          {data.workerApplications.map((w) => (
            <div
              key={w.id}
              className="rounded-md border p-5 dark:border-gray-700"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium">{w.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(w.receivedAt)}
                </p>
              </div>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Location:
                </span>{" "}
                {w.location}
              </p>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Availability:
                </span>{" "}
                {w.availability}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {w.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border px-3 py-1 text-sm dark:border-gray-700"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {w.note && (
                <p className="mt-3 text-gray-800 dark:text-gray-200">
                  <span className="font-medium">Note:</span> {w.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}