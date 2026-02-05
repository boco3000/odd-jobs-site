import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Odd Jobs
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/request-help"
            className="rounded-md px-3 py-2 hover:bg-gray-100 transition"
          >
            Request help
          </Link>

          <Link
            href="/become-a-worker"
            className="rounded-md px-3 py-2 hover:bg-gray-100 transition"
          >
            Become a worker
          </Link>
        </div>
      </nav>
    </header>
  );
}


