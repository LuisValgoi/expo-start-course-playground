import { getBlob, ref } from 'firebase/storage';
import { storage } from 'src/services/firebase';
import { useEffect, useState } from 'react';

function useRemoteImage(path: string) {
  const [src, setSrc] = useState<string>();
  const imgRef = ref(storage, path);

  useEffect(() => {
    async function fetch() {
      const blob = await getBlob(imgRef);
      const src = URL.createObjectURL(blob);
      setSrc(src)
    }
    fetch();
  }, []);

  return {
    src,
  };
}

export default useRemoteImage;
