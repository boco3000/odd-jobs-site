import Link from "next/link";
import NavLink from "@/components/NavLink";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Odd Jobs
        </Link>

        <div className="flex items-center gap-2">
          <NavLink href="/request-help">Request help</NavLink>
          <NavLink href="/become-a-worker">Become a worker</NavLink>

          <a
            href="https://apps.apple.com/us/app/the-oddjobs-app/id1515838366"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
          >
            Get the app <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
