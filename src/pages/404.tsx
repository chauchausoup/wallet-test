import Link from 'next/link';
import * as React from 'react';

export default function NotFoundPage() {
  return (
    <div>
      <main>
        <section className="bg-white">
          <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
            <h1 className="mt-8 text-4xl md:text-6xl">Page Not Found</h1>
            <Link href="/">Back to Home</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
