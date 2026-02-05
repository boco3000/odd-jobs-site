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
        </div>
      </nav>
    </header>
  );
}




