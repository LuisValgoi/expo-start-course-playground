import { FontAwesome } from '@expo/vector-icons';
import {
  launchImageLibraryAsync,
  ImagePickerAsset,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';
import { HStack, IInputProps, Image, Input, Text, VStack } from 'native-base';
import React, { useState } from 'react';

type ImagePickerProps = {
  onPickImage: (selectedImage: ImagePickerAsset) => Promise<void>;
} & IInputProps;

const ImagePicker: React.FC<ImagePickerProps> = ({ onPickImage, ...props }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<ImagePickerAsset | null>(null);

  const handlePickImage = async () => {
    setLoading(true);
    await requestMediaLibraryPermissionsAsync();
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
      onPickImage(result.assets[0]);
    }
    setLoading(false);
  };

  return (
    <VStack justifyItems="flex-start" width="full" space="2">
      <Input
        isReadOnly
        focusable
        variant="outline"
        size="sm"
        colorScheme="gray"
        onPressIn={handlePickImage}
        leftElement={
          <FontAwesome style={{ paddingLeft: 20 }} color="gray" name="upload" />
        }
        _focus={{
          bgColor: 'gray.100',
          borderWidth: 1,
          borderColor: 'gray.400',
        }}
        _invalid={{
          bgColor: 'red.100',
          borderWidth: 2,
          borderColor: 'red.500',
        }}
        {...props}
      />

      {loading && <Text colorScheme="gray">Uploading...</Text>}

      {image && (
        <HStack space="2" alignItems="center">
          <Image
            borderRadius="md"
            width="8"
            height="8"
            source={{ uri: image.uri }}
            alt={image.fileName || ''}
          />
          <Text colorScheme="gray">{image.fileName}</Text>
        </HStack>
      )}
    </VStack>
  );
};

export default ImagePicker;
