export type Book = {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  file_url: string;
  cover_url: string;
};

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: '100% Answered Prayer',
    slug: '100-percent-answered-prayer',
    category: 'Prayer',
    description: 'A comprehensive guide to understanding the mechanics of answered prayer.',
    file_url: '#',
    cover_url: 'https://placehold.co/400x600/2563eb/ffffff?text=100%25+Prayer',
  },
  {
    id: '2',
    title: 'The Art of Leadership',
    slug: 'the-art-of-leadership',
    category: 'Leadership',
    description: 'Developing the mindset and skills required to lead with excellence.',
    file_url: '#',
    cover_url: 'https://placehold.co/400x600/0f172a/ffffff?text=Leadership',
  },
  {
    id: '3',
    title: 'Church Growth Secrets',
    slug: 'church-growth-secrets',
    category: 'Church Growth',
    description: 'Practical steps for expanding the reach of your local ministry.',
    file_url: '#',
    cover_url: 'https://placehold.co/400x600/16a34a/ffffff?text=Growth',
  },
  {
    id: '4',
    title: 'Ministerial Ethics',
    slug: 'ministerial-ethics',
    category: 'Ministry',
    description: 'Standard of conduct for those in full-time ministry.',
    file_url: '#',
    cover_url: 'https://placehold.co/400x600/dc2626/ffffff?text=Ethics',
  },
];

export const CATEGORIES = ['All', ...new Set(MOCK_BOOKS.map(b => b.category))];
