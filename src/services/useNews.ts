import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { firestore } from 'src/services/firebase';
import { INews } from 'src/interfaces/interfaces';
import { useEffect, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';

function useNews() {
  const { loggedUser, setUnsubscribe } = useAuth();
  const newsDocsRef = collection(firestore, 'news');
  const [loading, setLoading] = useState<boolean>();
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    setLoading(true);

    const qq = query(newsDocsRef, where('author', '==', loggedUser?.uid));
    const unsubscribe = onSnapshot(qq, (snapshot) => {
      const news = [] as INews[];
      snapshot.forEach((change) => {
        news.push(change.data() as INews);
      });
      setNews(news);
      setLoading(false);
    });

    setUnsubscribe((prev) => [...prev, unsubscribe]);
  }, []);

  return {
    loading,
    news,
    empty: !loading && news.length === 0,
  };
}

export default useNews;
