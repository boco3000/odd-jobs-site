"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const base =
    "rounded-md px-3 py-2 transition hover:bg-gray-100";
  const active = "bg-gray-100 font-medium";
  const inactive = "";

  return (
    <Link href={href} className={`${base} ${isActive ? active : inactive}`}>
      {children}
    </Link>
  );
}

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



