import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { firestore } from 'src/services/firebase';
import { NewsFormScreenCompFormValues } from 'src/components/_screens_/NewsForm';
import { StorageError, getDownloadURL, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { ref } from 'firebase/storage';
import { storage } from 'src/services/firebase';

function useNewsCreate() {
  const [loading, setLoading] = useState<boolean>();

  const create = async ({
    title,
    description,
    image,
  }: NewsFormScreenCompFormValues) => {
    setLoading(true);
    try {
      const addRef = collection(firestore, 'news');
      const addPayload = { title, description };
      const news = await addDoc(addRef, addPayload);

      const imgRef = ref(storage, `images/news/${news.id}`);
      const imgSrc = await fetch(image);
      const imgBlob = await imgSrc.blob();
      await uploadBytes(imgRef, imgBlob);

      const imagePath = await getDownloadURL(imgRef);

      const updateRef = doc(firestore, news.path);
      const updatePayload = { id: news.id, imagePath, imageName: imgRef.name };
      await updateDoc(updateRef, updatePayload);
    } catch (error) {
      throw Error((error as StorageError).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    create,
  };
}

export default useNewsCreate;
