export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Odd Jobs. Built for NYC.</p>
          <p className="text-gray-500 dark:text-gray-400">
            Fast, high-quality gig help.
          </p>
        </div>
      </div>
    </footer>
  );
}