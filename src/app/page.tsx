'use client';
import { useState } from 'react';
import { MOCK_BOOKS, CATEGORIES } from '@/constants/books';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

function BookCard({ book }: { book: any }) {
  return (
    <div className="group flex flex-col items-center text-center transition-all duration-300">
      {/* Book Cover - The star of the show */}
      <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <Link href={`/book/${book.slug}`}>
          <img 
            src={book.cover_url} 
            alt={book.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </Link>
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4 px-2 line-clamp-2">
        {book.title}
      </h3>

      {/* Action Buttons */}
      <div className="flex flex-col w-full gap-2 max-w-[140px]">
        <button className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 13.171 9 13.1 9 13C9 12.553 8.632 12.25 8.25 12.25C8.124 12.25 8 12.333 8 12.5C8 12.733 8.245 12.8 la 8.684 13.342zM12 15a3 3 0 100-6 3 3 0 000 6z"/></svg>
          Share
        </button>
        <a 
          href={book.file_url} 
          download 
          className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-blue-600 text-white rounded-md text-xs font-semibold hover:bg-blue-700 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          Download
        </a>
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
      {/* Top Navigation Bar */}
      <header className="w-full border-b border-slate-100 dark:border-slate-900 px-6 py-4 flex items-center justify-between bg-white dark:bg-slate-950">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">R</div>
          <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">RATC ARCHIVES</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
            Download All Books (131)
          </button>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Section */}
        <div className="mb-12">
          <div className="relative max-w-3xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for any book..." 
              className="w-full px-6 py-3 pl-12 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-4 rounded-md text-sm font-bold hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            Filter by Collection
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${activeCat === cat ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
}
