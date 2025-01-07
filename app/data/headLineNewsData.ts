import axios from "axios";

interface articleProps {
  author?: string;
  content?: string;
  description?: string;
  title?: string;
  urlToImage?: string;
}

export const HeadLineNewsData = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );

    if (response.status === 200) {
      const filteredArticles = response.data.articles.filter(
        (article: articleProps) =>
          article.author &&
          article.content &&
          article.description &&
          article.title &&
          article.urlToImage
      );

      return filteredArticles;
    } else {
      console.error("에러 : ", response.status);
      return [];
    }
  } catch (error) {
    console.error("서버 에러 : ", error);
    return [];
  }
};
