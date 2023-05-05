import { useEffect, useState } from 'react';
import { NewsItemAPIProps } from '../interfaces/interfaces';
import { baseUrl } from '../services/URLBase';

function useHome() {
  const [loading, setLoading] = useState<boolean>(true);
  const [news, setNews] = useState<NewsItemAPIProps[]>([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((json) => setNews(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    news,
  };
}

export default useHome;
