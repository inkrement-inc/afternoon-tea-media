'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="エリア、店名、特徴で検索..."
          className="w-full px-6 py-4 pr-14 rounded-full text-gray-800 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
          }}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-rose-600 hover:bg-rose-700 text-white p-3 rounded-full transition"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
