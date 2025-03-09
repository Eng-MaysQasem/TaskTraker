export default function NotFound() {
    return (
      <main className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600"> Task Not Found</h1>
        <p>The task you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 underline"> Go back to home</a>
      </main>
    );
  }
  