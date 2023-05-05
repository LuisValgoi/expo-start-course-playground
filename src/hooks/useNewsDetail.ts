import { useEffect, useState } from 'react';
import { PostAPIProps } from '../interfaces/interfaces';
import { baseUrl } from '../services/URLBase';

function useNewsDetail(urlRoute: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostAPIProps[]>([]);
  const post = posts.find((p) => p.url === urlRoute);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((json) => setPosts(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    post,
  };
}

export default useNewsDetail;
