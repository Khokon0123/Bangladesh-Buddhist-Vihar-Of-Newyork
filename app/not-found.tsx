import Link from "next/link";

/**
 * 404 Not Found Page
 * Custom page for when a route is not found
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <h1 className="text-9xl font-light text-primary/20 mb-4">404</h1>
          <svg
            className="w-16 h-16 mx-auto text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-primary-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-8">
          The page you are looking for does not exist or has been moved.
          Please check the URL or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200"
          >
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

