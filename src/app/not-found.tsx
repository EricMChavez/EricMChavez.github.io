import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="text-6xl font-bold text-accent">404</h1>
      <p className="mt-4 text-xl text-text-secondary">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
      >
        Back to Home
      </Link>
    </main>
  );
}
