export default function CaseStudyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Case study</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        OddJobs New York — marketing site + demo lead capture forms built as a
        portfolio project.
      </p>

      <p className="mt-4">
        <a href="/submissions" className="underline">
          View demo submissions
        </a>
      </p>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Goal</h2>
        <p className="text-gray-700 dark:text-gray-200">
          Build a fast, clean landing site with clear CTAs, accessible forms, a
          mobile responsive layout, and a simple client/server flow using
          Next.js App Router.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Stack</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
          <li>Next.js (App Router)</li>
          <li>React + TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Vercel deployment (GitHub integration)</li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Architecture highlights</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2">
          <li>
            Shared layout with reusable navigation components (
            <code className="px-1 rounded bg-gray-100 dark:bg-gray-800">
              Header
            </code>{" "}
            +{" "}
            <code className="px-1 rounded bg-gray-100 dark:bg-gray-800">
              NavLink
            </code>
            ).
          </li>
          <li>
            Accessible forms with client validation, server validation, and
            inline error messaging (ARIA + focus states).
          </li>
          <li>
            API routes for demo submissions (
            <code className="px-1 rounded bg-gray-100 dark:bg-gray-800">
              /api/request-help
            </code>{" "}
            and{" "}
            <code className="px-1 rounded bg-gray-100 dark:bg-gray-800">
              /api/worker-application
            </code>
            ).
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">What I’d add next</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
          <li>Email notifications or storage for submissions</li>
          <li>Analytics for CTA tracking</li>
          <li>Mobile nav menu + additional trust content</li>
        </ul>
      </section>
    </main>
  );
}
