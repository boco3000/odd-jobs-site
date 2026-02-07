import Link from "next/link";
import FeatureGrid from "@/components/FeatureGrid";
import FAQSection from "@/components/FAQSection";
export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          OddJobs New York
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Getting a hand shouldn&apos;t cost an arm and a leg.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/request-help"
            className="rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
          >
            Request help
          </Link>

          <Link
            href="/become-a-worker"
            className="rounded-md border border-black px-6 py-3 font-medium hover:bg-gray-100 transition dark:border-gray-300 dark:hover:bg-gray-800"
          >
            Become a worker
          </Link>
        </div>
      </section>
      {/* How it works */}
      <FeatureGrid />
      <FAQSection />
    </main>
  );
}

