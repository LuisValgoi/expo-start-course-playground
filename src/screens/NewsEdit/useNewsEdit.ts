import { doc, updateDoc } from 'firebase/firestore';
import db from 'src/services/firebase';
import { useDocument } from 'react-firebase-hooks/firestore';
import { INews } from 'src/interfaces/interfaces';
import { NewsFormScreenCompFormValues } from 'src/components/_screens_/NewsForm';

function useNewsEdit(id: string) {
  const [newsDoc, loading, error] = useDocument(doc(db, 'news', id));
  const news = { ...newsDoc?.data(), id } as INews;

  const update = async (formValues: NewsFormScreenCompFormValues) => {
    return await updateDoc(newsDoc?.ref!, formValues);
  };

  return {
    loading,
    error,
    news,
    update
  };
}

export default useNewsEdit;
