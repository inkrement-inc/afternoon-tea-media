import { Article } from '@/app/page';
import { MapPin, Star, Calendar } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
      <div className="relative h-48 bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
        <div className="text-6xl">🫖</div>
        <div className="absolute top-3 right-3 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {article.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {article.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-rose-600" />
            <span>{article.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold">{article.rating}</span>
            <span className="text-gray-400">/ 5.0</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-rose-600" />
            <span>{article.date}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-2xl font-bold text-rose-600">{article.price}</span>
          <button className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition text-sm font-semibold">
            詳細を見る
          </button>
        </div>
      </div>
    </div>
  );
}
