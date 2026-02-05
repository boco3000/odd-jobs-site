"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const base =
    "rounded-md px-3 py-2 transition text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800";
  const active = "bg-gray-100 font-medium dark:bg-gray-800";

  return (
    <Link href={href} className={`${base} ${isActive ? active : ""}`}>
      {children}
    </Link>
  );
}
