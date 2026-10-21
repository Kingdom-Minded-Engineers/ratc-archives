'use client';
import { MOCK_BOOKS } from '@/constants/books';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function BookContent({ slug }: { slug: string }) {
  const book = MOCK_BOOKS.find(b => b.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-12 text-center">{book.title}</h1>

      <div className="relative w-full max-w-md aspect-[2/3] mb-12 group">
        <img 
          src={book.cover_url} 
          alt={book.title} 
          className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-blue-900/20 border border-white/10"
        />
      </div>

      <div className="max-w-2xl text-center mb-12">
        <p className="text-slate-400 text-lg leading-relaxed">
          {book.description}
        </p>
      </div>

      <a 
        href={book.file_url} 
        download 
        className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-500/30 mb-12"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        Download
      </a>

      <Link 
        href="/" 
        className="text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Back to home page
      </Link>
    </>
  );
}
