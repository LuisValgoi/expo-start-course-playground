import { IImageProps, Image, Skeleton } from 'native-base';
import React from 'react';
import useRemoteImage from './useRemoteImage';

type RemoteImage = { imagePath: string } & IImageProps;

const RemoteImage: React.FC<RemoteImage> = ({ imagePath, ...props }) => {
  const { src } = useRemoteImage(imagePath);

  if (!src) {
    return <Skeleton h={props.height || "20"} borderRadius="sm" />;
  }

  return <Image src={src} {...props} />;
};

export default RemoteImage;
