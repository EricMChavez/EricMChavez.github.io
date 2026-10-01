import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="font-display text-display font-semibold text-accent">404</h1>
      <p className="mt-4 text-xl text-text-secondary">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-accent px-6 py-3 font-medium text-on-accent transition-colors hover:bg-accent-hover"
      >
        Back to Home
      </Link>
    </main>
  );
}
