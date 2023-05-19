import { collection } from 'firebase/firestore';
import { firestore } from 'src/services/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { INews } from 'src/interfaces/interfaces';

function useNews() {
  const [newsDoc, loading, error] = useCollection(collection(firestore, 'news'));
  const news = newsDoc?.docs.map(
    (doc) =>
      ({
        ...doc.data(),
        id: doc.id,
      } as INews)
  );

  return {
    loading,
    error,
    news,
  };
}

export default useNews;
