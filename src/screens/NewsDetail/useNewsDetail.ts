import { doc } from 'firebase/firestore';
import db from 'src/services/firebase';
import { useDocument } from 'react-firebase-hooks/firestore';
import { PostAPIProps } from 'src/interfaces/interfaces';

function useNewsDetail(id: string) {
  const [postDoc, loading, error] = useDocument(doc(db, 'news', id));
  const post = postDoc?.data() as PostAPIProps;

  return {
    loading,
    error,
    post,
  };
}

export default useNewsDetail;
