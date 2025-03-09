import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
