import { Suspense } from 'react';
import BookContent from './BookContent';

export default async function BookDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center px-4 py-16 font-sans">
      <Suspense fallback={<div className="text-white animate-pulse">Loading book details...</div>}>
        <BookContent slug={slug} />
      </Suspense>
    </div>
  );
}
