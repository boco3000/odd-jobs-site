import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Odd Jobs
        </Link>

        <div className="flex gap-6">
          <Link href="/request-help" className="hover:underline">
            Request help
          </Link>
          <Link href="/become-a-worker" className="hover:underline">
            Become a worker
          </Link>
        </div>
      </nav>
    </header>
  );
}
