import { addDoc, collection } from 'firebase/firestore';
import db from 'src/services/firebase';
import { NewsFormScreenCompFormValues } from 'src/components/_screens_/NewsForm';

function useNewsCreate() {
  const create = async (formValues: NewsFormScreenCompFormValues) => {
    return await addDoc(collection(db, 'news'), formValues);
  };

  return {
    create
  };
}

export default useNewsCreate;
