import { addDoc, collection } from 'firebase/firestore';
import { firestore } from 'src/services/firebase';
import { NewsFormScreenCompFormValues } from 'src/components/_screens_/NewsForm';
import { uploadBytes } from 'firebase/storage';
import { useState } from 'react';

function useNewsCreate() {
  const [loading, setLoading] = useState(false);

  const create = async (formValues: NewsFormScreenCompFormValues) => {
    setLoading(true);

    await addDoc(collection(firestore, 'news'), {
      title: formValues.title,
      description: formValues.description,
      imgPath: formValues.image.ref.fullPath
    });

    return uploadBytes(formValues.image.ref, formValues.image.data).finally(
      () => {
        setLoading(false);
      }
    );
  };

  return {
    loading,
    create,
  };
}

export default useNewsCreate;
