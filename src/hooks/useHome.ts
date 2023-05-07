import { useEffect, useState } from 'react';
import { NewsListItemAPIProps } from 'interfaces/interfaces';
import { baseUrl } from 'src/services/URLBase';

function useHome() {
  const [loading, setLoading] = useState<boolean>(true);
  const [news, setNews] = useState<NewsListItemAPIProps[]>([]);
  const filteredNews = news.filter((n) => n.title && n.description);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((json) => setNews(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    news: filteredNews,
  };
}

export default useHome;
