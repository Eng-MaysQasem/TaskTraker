"use client";

interface ErrorPageProps {
  error: Error; 
  reset: () => void; 
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-bold text-red-600"> Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={reset} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Try Again
      </button>
    </main>
  );
}
