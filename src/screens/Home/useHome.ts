import { collection } from 'firebase/firestore';
import db from 'src/services/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { NewsListItemAPIProps } from 'src/interfaces/interfaces';

function useHome() {
  const [newsDoc, loading, error] = useCollection(collection(db, 'news'));
  const news = newsDoc?.docs.map((doc) => ({
    ...(doc.data() as NewsListItemAPIProps),
    id: doc.id,
  }));

  return {
    loading,
    error,
    news,
  };
}

export default useHome;
