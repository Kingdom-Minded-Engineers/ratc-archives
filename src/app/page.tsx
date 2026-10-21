'use client';
import { useState } from 'react';
import { MOCK_BOOKS, CATEGORIES } from '@/constants/books';

function BookCard({ book }: { book: any }) {
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      <div className="aspect-[2/3] overflow-hidden bg-slate-100">
        <img src={book.cover_url} alt={book.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
      </div>
      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">{book.category}</span>
        <h3 className="mt-3 text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{book.title}</h3>
        <div className="mt-5 flex items-center justify-between">
          <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Preview
          </button>
          <a href={book.file_url} className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-2">
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
    <main className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Digital Library</h1>
        <p className="text-slate-500 mb-8 text-lg">Access our curated collection of guides and spiritual resources.</p>
        
        <div className="relative max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Search books by title..." 
            className="w-full px-5 py-3 pl-12 bg-white border border-slate-200 rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex gap-2 justify-center mb-12 overflow-x-auto pb-4">
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCat === cat ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}
