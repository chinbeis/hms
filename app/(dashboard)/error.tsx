'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex flex-col items-center">
          <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-100">500</h1>
          <h2 className="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-300">Oops! Something went wrong.</h2>
          <p className="mt-2 text-center text-gray-500 dark:text-gray-400">
            We are sorry, but it seems there is an internal server error. Please try again later.
          </p>
          <Button
            onClick={() => reset()}
            className="mt-6 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
