import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Odd Jobs</h1>
        <p className="mt-4 text-lg text-gray-600">
          Getting a hand shouldn't cost an arm and a leg.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/request-help"
            className="rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
          >
            Request help
          </Link>

          <Link
            href="/become-a-worker"
            className="rounded-md border border-black px-6 py-3 font-medium hover:bg-gray-100 transition"
          >
            Become a worker
          </Link>
        </div>
      </section>
    </main>
  );
}

