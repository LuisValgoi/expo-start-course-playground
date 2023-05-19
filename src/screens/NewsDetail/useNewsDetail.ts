import { doc } from 'firebase/firestore';
import { firestore } from 'src/services/firebase';
import { useDocument } from 'react-firebase-hooks/firestore';
import { INews } from 'src/interfaces/interfaces';

function useNewsDetail(id: string) {
  const [newsDoc, loading, error] = useDocument(doc(firestore, 'news', id));
  const news = { ...newsDoc?.data(), id: newsDoc?.id } as INews;

  return {
    loading,
    error,
    news,
  };
}

export default useNewsDetail;