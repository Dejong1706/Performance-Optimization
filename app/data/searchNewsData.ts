import axios from "axios";

export interface articleProps {
  author?: string;
  content?: string;
  description?: string;
  title?: string;
  urlToImage?: string;
}

export const SearchNewsData = async (searchWord: string) => {
  console.log(searchWord);
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchWord}&pageSize=50&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );

    if (response.status === 200) {
      const filteredArticles = response.data.articles.filter(
        (article: articleProps) =>
          article.author &&
          article.content &&
          article.description &&
          article.title &&
          article.urlToImage &&
          article.urlToImage.startsWith("https://")
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
