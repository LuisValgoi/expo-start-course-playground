import { getBlob, ref } from 'firebase/storage';
import { storage } from 'src/services/firebase';
import { useEffect, useState } from 'react';

function useRemoteImage(path: string) {
  const [blob, setBlob] = useState<Blob>();
  const [src, setSrc] = useState<string>();
  const [filename, setFilename] = useState<string>();
  const imgRef = ref(storage, path);

  useEffect(() => {
    async function fetch() {
      if (imgRef.parent === null || !imgRef) {
        return;
      }

      const blob = await getBlob(imgRef);
      const src = URL.createObjectURL(blob);
      setFilename(imgRef.name);
      setSrc(src)
      setBlob(blob)
    }
    fetch();
  }, []);

  return {
    filename,
    src,
    blob
  };
}

export default useRemoteImage;
