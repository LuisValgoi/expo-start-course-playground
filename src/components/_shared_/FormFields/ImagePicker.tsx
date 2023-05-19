import { FormControl, IInputProps, WarningOutlineIcon } from 'native-base';
import React from 'react';
import ImagePicker from '../ImagePicker';
import { ImagePickerAsset } from 'expo-image-picker';
import { UseFormSetError, UseFormSetValue } from 'react-hook-form';

export type FormFieldImagePickerProps = {
  controllerName: string;
  setValue: UseFormSetValue<any>;
  setError: UseFormSetError<any>;
  errorMessage?: string;
  onPickImage: (data: Blob) => void;
} & IInputProps;

const FormFieldImagePicker: React.FC<FormFieldImagePickerProps> = ({
  controllerName,
  setValue,
  setError,
  errorMessage = null,
  isInvalid,
  onPickImage,
  ...rest
}) => {
  const invalid = !!errorMessage || isInvalid;

  const handlePickImage = async (img: ImagePickerAsset) => {
    const response = await fetch(img.uri);
    const data = await response.blob();
    onPickImage(data);
    setValue(controllerName, img.fileName);
    setError(controllerName, {});
  };

  return (
    <FormControl isInvalid={invalid}>
      <ImagePicker
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
        onPickImage={handlePickImage}
        {...rest}
      />
      {errorMessage && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errorMessage}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default FormFieldImagePicker;
