import { doc, updateDoc } from 'firebase/firestore';
import { firestore, storage } from 'src/services/firebase';
import { useDocument } from 'react-firebase-hooks/firestore';
import { INews } from 'src/interfaces/interfaces';
import { NewsFormScreenCompFormValues } from 'src/components/_screens_/NewsForm';
import useRemoteImage from 'src/components/_application_/RemoteImage/useRemoteImage';
import { ref, uploadBytes } from 'firebase/storage';

function useNewsEdit(id: string) {
  const [newsDoc, loading, error] = useDocument(doc(firestore, 'news', id));
  const news = { ...newsDoc?.data(), id } as INews;

  const { src, filename } = useRemoteImage(news.imagePath);
  const formattedNews = {
    ...news,
    imageSrc: src,
    imageName: filename,
  } as INews;

  const update = async ({
    title,
    description,
    image,
  }: NewsFormScreenCompFormValues) => {
    const values = { title, description };
    await updateDoc(newsDoc?.ref!, values);

    const response = await fetch(image);
    const data = await response.blob();
    return uploadBytes(ref(storage, news.imagePath), data);
  };

  return {
    loading,
    error,
    news: formattedNews,
    update,
  };
}

export default useNewsEdit;
