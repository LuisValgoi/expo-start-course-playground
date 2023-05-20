import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { firestore } from 'src/services/firebase';
import { NewsFormScreenCompFormValues } from 'src/components/_screens_/NewsForm';
import { uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { ref } from 'firebase/storage';
import { storage } from 'src/services/firebase';

function useNewsCreate() {
  const [loading, setLoading] = useState(false);

  const create = async ({
    title,
    description,
    image,
  }: NewsFormScreenCompFormValues) => {
    setLoading(true);

    const values = { title, description };
    const news = await addDoc(collection(firestore, 'news'), values);

    const imagePath = `images/${news.path}`;
    await updateDoc(doc(firestore, news.path), { imagePath });

    const storageRef = ref(storage, imagePath);
    const response = await fetch(image);
    const data = await response.blob();
    await uploadBytes(storageRef, data);

    setLoading(false);
  };

  return {
    loading,
    create,
  };
}

export default useNewsCreate;
