'use client';
import { useState } from 'react';
import { MOCK_BOOKS, CATEGORIES } from '@/constants/books';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

const CATEGORY_COLORS: Record<string, string> = {
  'Prayer': 'bg-blue-600',
  'Leadership': 'bg-slate-900',
  'Church Growth': 'bg-green-600',
  'Ministry': 'bg-red-600',
  'Default': 'bg-slate-500',
};

const CATEGORY_TEXT: Record<string, string> = {
  'Prayer': '100% Prayer',
  'Leadership': 'Leadership',
  'Church Growth': 'Growth',
  'Ministry': 'Ethics',
  'Default': 'Resources',
};

function BookCard({ book }: { book: any }) {
  const colorClass = CATEGORY_COLORS[book.category] || CATEGORY_COLORS['Default'];
  const centerText = CATEGORY_TEXT[book.category] || CATEGORY_TEXT['Default'];

  return (
    <div className="group relative h-full min-h-[450px] w-full rounded-3xl overflow-hidden transition-all hover:scale-[1.02] duration-300 shadow-lg flex flex-col">
      <div className={`flex-1 ${colorClass} flex items-center justify-center p-6 text-center`}>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {centerText}
        </h2>
      </div>

      <div className="bg-slate-950/90 backdrop-blur-md p-5 border-t border-white/10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded mb-2 inline-block">
          {book.category}
        </span>
        <h3 className="text-white font-bold text-lg mb-4 truncate">
          {book.title}
        </h3>
        
        <div className="flex items-center justify-between gap-3">
          <Link 
            href={`/book/${book.slug}`} 
            className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Preview
          </Link>
          
          <a 
            href={book.file_url} 
            download 
            className="bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');

  const filteredBooks = MOCK_BOOKS.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCat === 'All' || book.category === activeCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <header className="w-full max-w-6xl mx-auto px-6 py-6 flex justify-end">
        <ThemeToggle />
      </header>

      <main className="max-w-6xl mx-auto px-6 py-4 flex flex-col items-center">
        <div className="w-full text-center mb-12">
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg font-medium">
            Access our curated collection of guides and spiritual resources.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search books by title..." 
              className="w-full px-6 py-4 pl-14 bg-slate-900 text-white border-none rounded-full shadow-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg className="absolute left-5 top-4.5 h-6 w-6 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="w-full flex gap-3 justify-center mb-16 overflow-x-auto pb-2">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCat === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
}
