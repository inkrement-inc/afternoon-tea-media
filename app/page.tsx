'use client';

import { useState } from 'react';
import ArticleCard from '@/components/ArticleCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { Coffee, MapPin, Star, TrendingUp } from 'lucide-react';

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  rating: number;
  price: string;
  date: string;
}

const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'リッツカールトン東京のアフタヌーンティー',
    description: '最上階の眺めとともに楽しむ贅沢なアフタヌーンティー体験',
    image: '/placeholder.jpg',
    category: 'ホテル',
    location: '東京・六本木',
    rating: 4.8,
    price: '¥8,000',
    date: '2024-12-15'
  },
  {
    id: '2',
    title: '季節限定ストロベリーアフタヌーンティー特集',
    description: '春の訪れを感じるいちご尽くしのアフタヌーンティー',
    image: '/placeholder.jpg',
    category: '季節限定',
    location: '東京・表参道',
    rating: 4.9,
    price: '¥6,500',
    date: '2024-12-18'
  },
  {
    id: '3',
    title: '伝統的な英国スタイルのアフタヌーンティー',
    description: 'クラシックなスコーンとサンドイッチを味わう',
    image: '/placeholder.jpg',
    category: 'クラシック',
    location: '東京・銀座',
    rating: 4.7,
    price: '¥7,200',
    date: '2024-12-20'
  },
  {
    id: '4',
    title: 'インスタ映え確実！フォトジェニックアフタヌーンティー',
    description: '見た目も味も最高のアフタヌーンティー体験',
    image: '/placeholder.jpg',
    category: 'フォトジェニック',
    location: '東京・表参道',
    rating: 4.6,
    price: '¥5,800',
    date: '2024-12-22'
  }
];

export default function Home() {
  const [articles, setArticles] = useState<Article[]>(sampleArticles);
  const [selectedCategory, setSelectedCategory] = useState<string>('すべて');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['すべて', 'ホテル', '季節限定', 'クラシック', 'フォトジェニック', 'ヘルシー'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'すべて' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Coffee className="w-8 h-8 text-rose-600" />
            <h1 className="text-3xl font-bold text-rose-900">Afternoon Tea Times</h1>
          </div>
          <p className="text-gray-600">優雅なティータイムを見つける情報メディア</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">最高のアフタヌーンティー体験を</h2>
          <p className="text-xl mb-8">全国の厳選されたアフタヌーンティースポットをご紹介</p>
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MapPin className="w-10 h-10 text-rose-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">120+</div>
            <p className="text-gray-600">掲載スポット</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Star className="w-10 h-10 text-rose-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">4.7</div>
            <p className="text-gray-600">平均評価</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Coffee className="w-10 h-10 text-rose-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">50+</div>
            <p className="text-gray-600">新着レビュー</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <TrendingUp className="w-10 h-10 text-rose-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">15</div>
            <p className="text-gray-600">今週の新着</p>
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Articles Grid */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {selectedCategory === 'すべて' ? '最新記事' : `${selectedCategory}のアフタヌーンティー`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          {filteredArticles.length === 0 && (
            <div className="text-center py-12 text-gray-600">
              <p>該当する記事が見つかりませんでした</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-16 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">About</h3>
              <p className="text-sm text-gray-600">
                Afternoon Tea Timesは、全国の素敵なアフタヌーンティースポットを紹介する情報メディアです。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">カテゴリー</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>ホテル</li>
                <li>カフェ</li>
                <li>季節限定</li>
                <li>クラシック</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">エリア</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>東京</li>
                <li>横浜</li>
                <li>大阪</li>
                <li>京都</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">フォロー</h3>
              <p className="text-sm text-gray-600">
                最新情報をチェック
              </p>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm pt-6 border-t">
            <p>&copy; 2024 Afternoon Tea Times. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
