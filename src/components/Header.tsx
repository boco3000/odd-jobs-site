import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/NavLink";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Link href="/" aria-label="OddJobs NY home">
            <Image
              src="/logo.png"
              alt="OddJobs NY logo"
              width={28}
              height={28}
              className="rounded-sm hover:opacity-90 transition"
              priority
            />
          </Link>

          <span className="hidden sm:inline text-xl font-bold">OddJobs NY</span>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <NavLink href="/request-help">Request help</NavLink>
          <NavLink href="/become-a-worker">Become a worker</NavLink>
          <NavLink href="/case-study">Case study</NavLink>
        </div>
        <a
            href="https://apps.apple.com/us/app/oddjobs-new-york/id6739154599"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
          >
            Get the app <span aria-hidden="true">↗</span>
          </a>
      </nav>
    </header>
  );
}
