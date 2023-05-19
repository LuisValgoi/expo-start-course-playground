import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { firestore } from 'src/services/firebase';
import { NewsFormScreenCompFormValues } from 'src/components/_screens_/NewsForm';
import { uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { ref } from 'firebase/storage';
import { storage } from 'src/services/firebase';

function useNewsCreate() {
  const [loading, setLoading] = useState(false);

  const create = async (formValues: NewsFormScreenCompFormValues) => {
    setLoading(true);

    const news = await addDoc(collection(firestore, 'news'), {
      title: formValues.title,
      description: formValues.description
    });

    await updateDoc(doc(firestore, news.path), {
      imagePath: news.id,
    })

    const storageRef = ref(storage, `images/${news.id}`);
    return uploadBytes(storageRef, formValues.image).finally(
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