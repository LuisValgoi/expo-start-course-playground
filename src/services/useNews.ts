import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from 'src/services/firebase';
import { INews } from 'src/interfaces/interfaces';
import { useEffect, useMemo, useState } from 'react';

function useNews() {
  const newsDocsRef = collection(firestore, 'news');
  const [loading, setLoading] = useState<boolean>();
  const [news, setNews] = useState<INews[]>([]);
  const empty = useMemo(() => news.length === 0, [news]);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(newsDocsRef, (snapshot) => {
      const news = [] as INews[];
      snapshot.forEach((change) => {
        news.push(change.data() as INews);
      });
      setNews(news);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    loading,
    news,
    empty,
  };
}

export default useNews;
