export interface NewsData {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface CardSectionArrayProps {
  data: NewsData[];
}

export interface CardSectionProps {
  data: NewsData;
}
