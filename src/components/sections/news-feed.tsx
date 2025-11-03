import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

type Article = {
  rank: number;
  upvotes: number;
  timestamp: string;
  headline: string;
  source: string;
  imageUrl: string;
  url: string;
};

const articles: Article[] = [
  {
    rank: 1,
    upvotes: 19,
    timestamp: "il y a 17 heures",
    headline: "Décès de Charles Coste, doyen des champions olympiques, à 101 ans",
    source: "lequipe.fr",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9c3cd07f-8e66-4b0b-9727-9a81c7ebce6e-entropie-ai/assets/images/images_1.png",
    url: "#"
  },
  {
    rank: 2,
    upvotes: 23,
    timestamp: "il y a 14 heures",
    headline: "Accusations de racisme visant Aron Donnum après le match Toulouse-Le Havre",
    source: "lequipe.fr",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9c3cd07f-8e66-4b0b-9727-9a81c7ebce6e-entropie-ai/assets/images/images_2.png",
    url: "#"
  },
  {
    rank: 3,
    upvotes: 14,
    timestamp: "il y a 20 heures",
    headline: "Séisme de magnitude 6,3 en Afghanistan : au moins 20 morts et des milliers de blessés",
    source: "francetvinfo.fr",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9c3cd07f-8e66-4b0b-9727-9a81c7ebce6e-entropie-ai/assets/images/images_3.png",
    url: "#"
  },
  {
    rank: 4,
    upvotes: 10,
    timestamp: "il y a 20 heures",
    headline: "Un homme tué par son fils à l'arme blanche dans les Alpes-Maritimes",
    source: "francebleu.fr",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9c3cd07f-8e66-4b0b-9727-9a81c7ebce6e-entropie-ai/assets/images/images_4.png",
    url: "#"
  },
  {
    rank: 5,
    upvotes: 9,
    timestamp: "il y a 10 heures",
    headline: "Décès de Renaud Revel à 71 ans",
    source: "jeanmarcmorandini.com",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9c3cd07f-8e66-4b0b-9727-9a81c7ebce6e-entropie-ai/assets/images/images_5.png",
    url: "#"
  },
  {
    rank: 6,
    upvotes: 9,
    timestamp: "il y a 21 heures",
    headline: "Procès de l'assassinat de l'avocat Antoine Sollacaro, treize ans après les faits",
    source: "france3-regions.francetvinfo.fr",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9c3cd07f-8e66-4b0b-9727-9a81c7ebce6e-entropie-ai/assets/images/images_6.png",
    url: "#"
  },
  {
    rank: 7,
    upvotes: 9,
    timestamp: "il y a 18 heures",
    headline: "Audience sur l'indemnisation des victimes du procès Le Scouarnec",
    source: "letelegramme.fr",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9c3cd07f-8e66-4b0b-9727-9a81c7ebce6e-entropie-ai/assets/images/images_7.png",
    url: "#"
  }
];

const rankColors: { [key: number]: string } = {
  1: "bg-[#ff6b9d]",
  2: "bg-[#9b87f5]",
  3: "bg-[#45b7d1]",
  4: "bg-[#45b7d1]",
  5: "bg-[#feca57]",
  6: "bg-[#96ceb4]",
  7: "bg-[#4ecdc4]",
};

const ArticleCard = ({ article }: { article: Article }) => {
  const rankColor = rankColors[article.rank] ?? 'bg-muted-foreground';

  return (
    <a href={article.url} className="block group rounded-lg transition-all duration-200 hover:bg-accent hover:shadow-sm">
      <div className="flex items-start gap-4 p-3">
        <div className="w-20 h-20 flex-shrink-0">
          <Image
            src={article.imageUrl}
            alt={article.headline}
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5">
            <span className={`text-white text-xs font-semibold px-1.5 py-px rounded-md ${rankColor}`}>
              #{article.rank}
            </span>
            <div className="flex items-center gap-0.5">
              <ArrowUp className="w-3 h-3" />
              <span>{article.upvotes}</span>
            </div>
            <span>•</span>
            <span>{article.timestamp}</span>
          </div>
          <h2 className="text-base font-semibold leading-[1.4] text-foreground">
            {article.headline}
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            {article.source}
          </p>
        </div>
      </div>
    </a>
  );
};

const NewsFeed = () => {
  return (
    <div className="flex flex-col gap-3">
      {articles.map((article) => (
        <ArticleCard key={article.rank} article={article} />
      ))}
    </div>
  );
};

export default NewsFeed;