"use client";

/**
 * Global Error Handler
 * This catches errors in the root layout that error.tsx cannot catch
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Log the error so it isn't silently ignored
  // and to satisfy lint rule about unused parameter.
  console.error(error);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
          <div className="max-w-md w-full text-center">
            <h1 className="text-2xl font-semibold text-primary-dark mb-4">
              Application Error
            </h1>
            <p className="text-neutral-600 mb-6">
              A critical error has occurred. Please refresh the page or contact
              support if the problem persists.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

