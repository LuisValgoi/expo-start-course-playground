import { FontAwesome } from '@expo/vector-icons';
import {
  launchImageLibraryAsync,
  ImagePickerAsset,
  MediaTypeOptions,
} from 'expo-image-picker';
import { HStack, IInputProps, Image, Input, Text } from 'native-base';
import React, { useState } from 'react';

type ImagePickerProps = {
  onPickImage: (selectedImage: ImagePickerAsset) => Promise<void>;
} & IInputProps;

const ImagePicker: React.FC<ImagePickerProps> = ({ onPickImage, ...props }) => {
  const [image, setImage] = useState<ImagePickerAsset | null>(null);

  const handlePickImage = async () => {
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
  };

  return (
    <HStack justifyItems="flex-start" width="full" space="2" height="8">
      <Input
        isReadOnly
        focusable
        variant="outline"
        size="sm"
        colorScheme="gray"
        flex={1}
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

      <HStack
        opacity={image ? 1 : 0}
        flex={1}
        alignItems="center"
        paddingY="2"
        space="2"
      >
        <Image
          borderRadius="md"
          width="8"
          height="8"
          source={{ uri: image?.uri }}
          alt={image?.fileName || ''}
        />
        <Text colorScheme="gray">{image?.fileName}</Text>
      </HStack>
    </HStack>
  );
};

export default ImagePicker;
